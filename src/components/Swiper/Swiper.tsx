import React, { useState } from "react";
import {
  SwiperContainerRoot,
  SwipperContent,
  SwipperContentWrapper,
} from "./Swiper.styles";

type SwipeState = {
  initialPoint: number;
  isSwiping: boolean;
  direction: 'left' | 'right' | ''
};

const SWIPE_INITIAL_STATE: SwipeState = {
  initialPoint: 0,
  isSwiping: false,
  direction: ''
};

const SWIPE_THRESHOLD = 5;

const ITEMS_LENGTH = 5

type SwiperContainerProps = {};

export const Swiper = ({}: SwiperContainerProps) => {
  const [swipe, setSwipe] = useState<SwipeState>(SWIPE_INITIAL_STATE);
  const [translateX, setTranslateX] = useState(0)

  const onTouchStart = (e: React.TouchEvent) => {
    setSwipe({
      ...swipe,
      initialPoint: e.touches.item(0).clientX,
      isSwiping: true,
    });
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!swipe.isSwiping) return;
/* 
    console.log({
      clientX: e.touches.item(0).clientX,
      diff: swipe.initialPoint - e.touches.item(0).clientX,
      initialSwipe: swipe.initialPoint,
      translateX,
    });

    const diff = swipe.initialPoint - (e.touches.item(0).clientX + translateX);

    setTranslateX(-diff) */

    const diff = swipe.initialPoint - e.touches.item(0).clientX

    setSwipe({
      ...swipe,
      direction: diff < 0 ? 'right' : 'left'
    })

  };

  const onTouchEnd = (e: React.TouchEvent) => {
    setSwipe({
      ...swipe,
      isSwiping: false
    })
  }

  return (
    <SwiperContainerRoot onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <SwipperContent
        css={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {Array.from({ length: ITEMS_LENGTH }).map((_, index) => (
          <SwipperContentWrapper>{swipe.direction}</SwipperContentWrapper>
        ))}
      </SwipperContent>
    </SwiperContainerRoot>
  );
};
