"use client"
import { useEffect, useRef } from "react";

const LazyImage = ({ src, alt, width, height, placeholder, className }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          img.classList.remove("loading");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      className={`${className} lazy loading`}
      src={placeholder}
      data-src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
