
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const speed = 0.15;

  useEffect(() => {
    const cursor = cursorRef.current;
    const blob = blobRef.current;

    if (!cursor || !blob) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Stretch based on speed/distance
      const stretch = Math.min(distance / 100, 0.5);
      const scaleX = 1 + stretch;
      const scaleY = 1 - stretch;

      gsap.set(cursor, {
        x: mouse.current.x,
        y: mouse.current.y,
      });

      gsap.set(blob, {
        x: pos.current.x,
        y: pos.current.y,
        rotation: angle,
        scaleX: scaleX,
        scaleY: scaleY,
      });

      requestAnimationFrame(updatePosition);
    };

    const onMouseDown = () => {
      gsap.to(blob, { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(blob, { scale: 1, duration: 0.2 });
    };

    // Hover effects for interactive elements
    const handleMouseEnter = () => {
      gsap.to(blob, { 
        width: 80, 
        height: 80, 
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        border: '1px solid #8B4513',
        duration: 0.3 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(blob, { 
        width: 40, 
        height: 40, 
        backgroundColor: '#FFC107',
        border: 'none',
        duration: 0.3 
      });
    };

    const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      // Ensure elements don't show default cursor
      (el as HTMLElement).style.cursor = 'none';
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    const animationId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = 'auto';
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        (el as HTMLElement).style.cursor = 'auto';
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Main Cursor Dot (Instant) */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#8B4513] rounded-full -translate-x-1/2 -translate-y-1/2 z-30"
      />
      
      {/* Liquid Honey Blob (Lagged & Stretched) */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-10 h-10 bg-[#FFC107] rounded-full -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_20px_rgba(255,193,7,0.5)]"
        style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 45% 55%' }}
      />
    </div>
  );
};

export default CustomCursor;
