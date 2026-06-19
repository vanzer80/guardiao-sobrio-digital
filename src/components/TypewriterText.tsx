import { useState, useEffect } from "react";

interface Props {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
}

export const TypewriterText = ({ text, speed = 45, className = '', startDelay = 0 }: Props) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted]     = useState(false);
  const done = displayed.length >= text.length;

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || done) return;
    const t = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, done]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span
          aria-hidden
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-[gs-cursor-blink_1s_step-end_infinite]"
        />
      )}
    </span>
  );
};
