import { useEffect, useRef } from "react";

export default function LazyImg({ src, dataSrc, alt }) {
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.src = target.dataset.src;
          target.classList.remove("loading");
          target.classList.add("loaded");
          observer.unobserve(target);
        }
      });
    });

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      data-src={dataSrc}
      alt={alt}
      className="lazy loading"
    />
  );
}
