
    'use client';

    import { useEffect } from 'react';
    import Lenis from '@studio-freight/lenis';

    const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
      useEffect(() => {
        const lenis = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
        });

        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      }, []);

      return <>{children}</>;
    };

    export default SmoothScroll;