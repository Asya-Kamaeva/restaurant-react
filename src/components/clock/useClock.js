import { useEffect } from "react";

export const useIntervalCallback = (callback) => {
  useEffect(() => {
    const timerId = setInterval(() => {
      callback(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [callback]);
};
