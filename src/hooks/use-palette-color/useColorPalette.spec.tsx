import { Pixel, RGBColors } from "./types";
import { quantization } from './utils';
import {
  getImagePixels,
  getBiggestColorRange,
  generateColor,
} from "./utils";

const imageData: ImageData = {
  colorSpace: "display-p3",
  data: new Uint8ClampedArray([
    194, 172, 148, 255, 196, 174, 150, 255, 197, 175, 151, 255, 194, 172, 148,
    255,
  ]),
  height: 0,
  width: 0,
};

const pixels: Pixel[] = [
  { r: 194, g: 172, b: 148 },
  { r: 196, g: 174, b: 150 },
  { r: 197, g: 175, b: 151 },
  { r: 194, g: 172, b: 148 },
];

describe("useColorPalette", () => {
  it("should return pixels from ImageData", () => {
    const pixelsFromFn = getImagePixels(imageData);

    expect(pixelsFromFn).toEqual(pixels);
  });

  it("should return biggest range color", () => {
    const biggestColorRange = getBiggestColorRange(pixels);

    expect(biggestColorRange).toBe(RGBColors.RED);
  });

  it("should return a RGB color", () => {
    const color = generateColor(pixels);

    expect(color).toEqual([{ r: 195, g: 149, b: 149 }]);
  });

  it("should return colors palette", () => {
    const colors = quantization(pixels, 2)

    expect(colors).toHaveLength(4)
  })
});
