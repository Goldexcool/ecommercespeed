import React, { useEffect, useState } from "react";

function Counter({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B+`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k+`;
    return `${num}+`;
  };

  return <span className="text-white md:text-6xl text-4xl">{formatNumber(count)}</span>;
}

export default Counter;
