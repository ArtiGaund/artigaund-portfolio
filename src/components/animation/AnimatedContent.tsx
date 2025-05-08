"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useAnimation, MotionProps } from "framer-motion";

interface AnimatedContentProps extends MotionProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  direction?: "vertical" | "horizontal";
  delay?: number; // in ms
  duration?: number;
  scale?: number;
  threshold?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  className,
  distance = 100,
  direction = "vertical",
  delay = 0,
  duration = 0.6,
  scale = 1,
  threshold = 0.1,
  ...motionProps
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start("visible");
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [controls, threshold]);

  // Explicit variant shape to avoid dynamic key typing issue
  const variants =
    direction === "horizontal"
      ? {
          hidden: {
            opacity: 0,
            scale,
            x: distance,
          },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
              duration,
              delay: delay / 1000,
            },
          },
        }
      : {
          hidden: {
            opacity: 0,
            scale,
            y: distance,
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration,
              delay: delay / 1000,
            },
          },
        };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
