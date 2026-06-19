import { useState, useEffect } from "react";

export const CustomCursor = () => {
  const [pos, setPos]         = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{
        width: 8,
        height: 8,
        background: "hsl(36 68% 47%)",
        transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.15s",
      }}
    />
  );
};
