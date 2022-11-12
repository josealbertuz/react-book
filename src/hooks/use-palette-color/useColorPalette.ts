import { useCallback, useEffect, useState } from 'react';
import { Pixel } from './types';
import { getImageData, getImagePixels, quantization } from './utils';

type ColorPaletteProps = {
  imageSrc: string;
  numberOfColors?: number
};

export const useColorPalette = ({ imageSrc, numberOfColors = 2 }: ColorPaletteProps) => {

  const [palette, setPalette] = useState<Pixel[]>()

  const getColors = useCallback(async () => {
    const imageData = await getImageData(imageSrc)

    if (!imageData) return

    const imagePixels = getImagePixels(imageData)
    const colors = quantization(imagePixels, numberOfColors)
    setPalette(colors)
  }, [imageSrc, numberOfColors])
  
  useEffect(() => {

    getColors()

  }, [imageSrc, numberOfColors])

  return palette
};
