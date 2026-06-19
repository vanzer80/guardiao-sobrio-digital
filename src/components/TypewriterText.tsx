import { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
}

export const TypewriterText = ({ text, speed = 45, className = '', startDelay = 0 }: Props) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setDisplayed(text); return; }

    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [started, text, speed, startDelay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {displayed.length < text.length && started && (
        <span
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-[gs-cursor-blink_1s_step-end_infinite]"
          aria-hidden="true"
        />
      )}
    </span>
  );
};
