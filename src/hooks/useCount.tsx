import { useState, useCallback } from "react";

function useCount(initialValue: number) {
  const [counter, setCounter] = useState(initialValue);

  const decrement = useCallback(() => {
    setCounter((currentCounter) => currentCounter - 1);
  }, []);

  const increment = useCallback(() => {
    setCounter((currentCounter) => currentCounter + 1);
  }, []);
  return {
    counter,
    decrement,
    increment,
  };
}

export default useCount;
