import { Pixel, RGBColors } from "./types";

const PIXEL_RGB_VALUES = 4;

export const getImageData = (url: string) => new Promise<ImageData | undefined>((resolve, reject) => {

  const image = new Image();

  image.src = url;
  image.crossOrigin = 'Anonymous'

  const canvas = document.createElement("canvas");

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
  
    const ctx = canvas.getContext("2d");

    ctx?.drawImage(image, 0, 0);
  
    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    imageData ? resolve(imageData) : reject()
  }

  image.onerror = reject
})

export const getImagePixels = (imageData: ImageData) =>
  imageData?.data.reduce<Pixel[]>((pixels, _, index, data) => {
    if (index % PIXEL_RGB_VALUES !== 0) return pixels;

    return [
      ...pixels,
      {
        r: data[index],
        g: data[index + 1],
        b: data[index + 2],
      },
    ];
  }, []);

export const getBiggestColorRange = (pixels: Pixel[]): RGBColors => {
  const minMaxRGBInitialValues = {
    rMin: Number.MAX_VALUE,
    rMax: Number.MIN_VALUE,
    gMin: Number.MAX_VALUE,
    gMax: Number.MIN_VALUE,
    bMin: Number.MAX_VALUE,
    bMax: Number.MIN_VALUE,
  };

  const { rMin, rMax, gMin, gMax, bMin, bMax } = pixels.reduce(
    ({ rMin, rMax, gMin, gMax, bMin, bMax }, { r, g, b }) => ({
      rMin: Math.min(r, rMin),
      rMax: Math.max(r, rMax),
      gMin: Math.min(g, gMin),
      gMax: Math.max(g, gMax),
      bMin: Math.min(b, bMin),
      bMax: Math.max(b, bMax),
    }),
    minMaxRGBInitialValues
  );

  const rgbRanges = {
    r: rMax - rMin,
    g: gMax - gMin,
    b: bMax - bMin,
  };

  const maxValue = Math.max(...Object.values(rgbRanges));

  if (maxValue === rgbRanges.r) return RGBColors.RED;
  if (maxValue === rgbRanges.g) return RGBColors.GREEN;

  return RGBColors.BLUE;
};

export const sortPixelsByColorRange = (
  pixels: Pixel[],
  biggestRangeChannel: RGBColors
) => [...pixels].sort((a, b) => a[biggestRangeChannel] - b[biggestRangeChannel]);

export const generateColor = (pixels: Pixel[]): Pixel[] => {

  const color = pixels.reduce<Pixel>((acc, curr) => ({
    r: acc.r + curr.r,
    g: acc.g + curr.g,
    b: acc.b + curr.b
  }), {r: 0, g: 0, b: 0})

  color.r = Math.round(color.r / pixels.length)
  color.g = Math.round(color.b / pixels.length)
  color.b = Math.round(color.b / pixels.length)

  return [color]
}

export const quantization = (pixels: Pixel[], numberOfColors: number): Pixel[] => {

  if (!pixels.length || numberOfColors <= 0) return generateColor(pixels)

  const sortedPixelsByBiggestRange = sortPixelsByColorRange(pixels, getBiggestColorRange(pixels))

  const midIndex = Math.round(sortedPixelsByBiggestRange.length / 2)

  return [
    ...quantization(sortedPixelsByBiggestRange.slice(0, midIndex), numberOfColors - 1),
    ...quantization(sortedPixelsByBiggestRange.slice(midIndex), numberOfColors - 1)
  ]
}