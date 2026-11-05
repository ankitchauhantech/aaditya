"use client";

import { useEffect, useState } from "react";

export function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState<number>(to);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let start = 0;
    const duration = 1400;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = to / steps;

    setCount(0);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [to]);

  return (
    <span suppressHydrationWarning>
      {mounted ? count : to}
      {suffix}
    </span>
  );
}
