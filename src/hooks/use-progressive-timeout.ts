import React, { useCallback, useRef } from 'react';

const useProgressiveTimeout = (
  onProgress: (percent: number) => void,
  onComplete: () => void, msPerStep = 255,
): [
    (ms: number) => void,
    (
    ) => void,
    React.MutableRefObject<boolean>
  ] => {
  const intervalRef = useRef<any>(null);
  const to = useRef(0);
  const from = useRef(0);
  const inProgress = useRef<boolean>(false);

  const stopProgress = useCallback(() => {
    if (intervalRef.current) {
      inProgress.current = false;
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback((ms: number) => {
    to.current = ms;
    from.current = 0;
    inProgress.current = true;
    intervalRef.current = setInterval(() => {
      if (from.current > to.current) {
        stopProgress();
        setTimeout(onComplete, msPerStep);
      } else {
        from.current += msPerStep;
        onProgress((from.current / to.current) * 100);
      }
    }, msPerStep);
  }, [msPerStep, stopProgress, onProgress, onComplete]);

  return [start, stopProgress, inProgress];
};

export default useProgressiveTimeout;
