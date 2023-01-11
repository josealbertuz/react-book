import { useState, useEffect } from "react";
type MountTransitionProps = {
  isMount: boolean;
  delay: number;
};

export const useMountTransition = ({
  isMount,
  delay,
}: MountTransitionProps) => {
  const [isTransitioning, setIsTransisitoning] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isMount && !isTransitioning) {
        console.log(`isMount && !isTransitioning: ${isMount && !isTransitioning}`)
        setIsTransisitoning(true)
        return
    }

    if (!isMount && isTransitioning) {
      console.log(`!isMount && isTransitioning: ${!isMount && isTransitioning}`)
      timeout = setTimeout(() => setIsTransisitoning(false), delay);
      return;
    }


    return () => clearTimeout(timeout)
  }, [isMount, isTransitioning]);

  return isTransitioning;
};
