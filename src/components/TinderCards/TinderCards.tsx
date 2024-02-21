import React, { useState } from "react";
import { TinderCard, TinderCardsRoot } from "./TinderCards.styles";

const DECISION_THRESHOLD = 75;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const CARDS = Array.from({ length: 10 }, (_, index) => ({
  color: getRandomColor(),
  title: `Tinder card ${index + 1}`,
}));

export const TinderCards = () => {
  const [tinderCards, setTinderCards] = useState(CARDS);
  const [startX, setStartX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [deltaX, setDeltaX] = useState(0);
  const [decision, setDecision] = useState<"left" | "right" | "reset" | "">("");

  const transform = !isAnimating ? undefined : `translateX(${deltaX}px) rotate(${deltaX / 14}deg)`;
  const cursor = startX ? "grabbing" : "grab";

  console.log({ deltaX, isAnimating, cursor, decision });

  const onDragStart = (
    e: React.MouseEvent<HTMLElement> & React.TouchEvent<HTMLElement>
  ) => {
    if (isAnimating) return;
    console.log('drag start')

    setStartX(e.pageX || e.touches[0].clientX);
  };

  const onDragMove = (
    e: React.MouseEvent | React.TouchEvent
  ) => {
    if (startX === 0) return;

    console.log('drag move')

    const currentX = (e as React.MouseEvent).pageX || (e as React.TouchEvent).touches[0].clientX;

    const currentDeltaX = currentX - startX;

    setDeltaX(currentDeltaX);

    setIsAnimating(true);
  };

  const onDragEnd = () => {
    if (deltaX === 0) return;
    console.log('drag end')

    const decision =
      deltaX >= DECISION_THRESHOLD
        ? "right"
        : deltaX <= -DECISION_THRESHOLD
        ? "left"
        : "reset";

    console.log(decision)
    setDecision(decision);

    setIsAnimating(false);
    setDeltaX(0);
    setStartX(0);
    decision !== 'reset' && setTinderCards(tinderCards.slice(1));
    setDecision("");
    
  };

  return (
    <TinderCardsRoot>
      {tinderCards.map(({title, color}, index) => {
        return (
          <TinderCard
            key={index}
            style={{
              backgroundColor: color,
              zIndex: tinderCards.length - index,
            }}
            {...(index === 0 && {
              style: {
                transform,
                cursor,
                backgroundColor: color,
                zIndex: tinderCards.length,
              },
              onMouseDown: onDragStart,
              onTouchStart: onDragStart,
              onMouseMove: onDragMove,
              onTouchMove: onDragMove,
              onMouseUp: onDragEnd,
              onTouchEnd: onDragEnd,
              decision
            })}
          >
            {title}
          </TinderCard>
        );
      })}
    </TinderCardsRoot>
  );
};
