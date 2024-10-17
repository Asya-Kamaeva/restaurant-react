import { useEffect, useState } from "react";

export const useWatch = (date) => {
  const [time, setTime] = useState(date);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return time;
};
