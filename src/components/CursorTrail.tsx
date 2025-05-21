'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isMoving, setIsMoving] = useState(false);
  let animationFrameId: number;
  let lastMoveTime = 0;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastMoveTime < 16) return; // Limit to ~60fps
      lastMoveTime = currentTime;

      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-12); // Reduced from 20 to 12 points
      });
    };

    const handleMouseStop = () => {
      setIsMoving(false);
      setTrail([]);
    };

    const updateTrail = () => {
      if (!isMoving && trail.length > 0) {
        setTrail(prev => prev.slice(1));
      }
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseStop);
    window.addEventListener('mouseup', handleMouseStop);
    
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseStop);
      window.removeEventListener('mouseup', handleMouseStop);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMoving, trail.length]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{
            x: point.x - 4,
            y: point.y - 4,
            scale: 1 - (index / trail.length) * 0.5,
            opacity: 0.8 - (index / trail.length) * 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.1,
          }}
        />
      ))}
    </div>
  );
} 