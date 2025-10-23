import { useEffect, useRef } from "react";

export default function LazyLoadVideo({ src, children, target = "video" }) {
  const ref = useRef(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = ref.current?.querySelector(target);

          if (!(el instanceof HTMLVideoElement)) return;

          if (entry.isIntersecting) {
            if (!hasLoaded.current) {
              el.src = src;
              el.load();
              hasLoaded.current = true;
            }
            el.play().catch((e) => {
              console.warn("Video play failed:", e.message);
            });
          } else {
            el.pause();
          }
        });
      },
      {
        rootMargin: "100px 0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, target]);

  return <div ref={ref}>{children}</div>;
}
