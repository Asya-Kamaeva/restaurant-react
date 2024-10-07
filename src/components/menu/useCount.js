import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    const newValue = count + 1 >= 5 ? 5 : count + 1;
    setCount(newValue);
  };
  const decrease = () => {
    const newValue = count - 1 <= 0 ? 0 : count - 1;
    setCount(newValue);
  };
  return {
    value: count,
    increase,
    decrease,
  };
};
