import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useButteryScroll() {
  const [lenisObj, setLenisObj] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({ __experimental__naiveDimensions: true, smoothWheel: true, autoRaf: false });
    setLenisObj(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        lenis.raf(performance.now())
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    };
  }, []);

  return { scrollInstance: lenisObj };
}
