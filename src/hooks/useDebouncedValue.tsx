import { useState, useEffect } from "react";

const useDebouncedValue = (value: string | number | boolean, delay = 250) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebouncedValue;
