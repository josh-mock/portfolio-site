"use client";
import { useEffect, useRef } from "react";

export default function LazyMedia({
  src,
  dataSrc,
  alt = "",
  className = "",
  aspectRatio = "",
  width,
  height,
  ...props
}) {
  const mediaRef = useRef();

  const isVideo = /\.(webm|mp4|ogg)$/i.test(dataSrc || src);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.src = target.dataset.src;

          if (target.tagName === "VIDEO") {
            target.load();
          }

          target.classList.remove("loading");
          target.classList.add("loaded");
          observer.unobserve(target);
        }
      });
    });

    observer.observe(media);

    return () => observer.disconnect();
  }, []);

  if (isVideo) {
    return (
      <video
        ref={mediaRef}
        data-src={dataSrc}
        className={`${className} lazy loading`}
        style={{ aspectRatio }}
        width={width}
        height={height}
        muted
        autoPlay
        loop
        playsInline
        {...props}
      />
    );
  }

  return (
    <img
      ref={mediaRef}
      data-src={dataSrc}
      alt={alt}
      className={`${className} lazy loading`}
      style={{ aspectRatio }}
      width={width}
      height={height}
      {...props}
    />
  );
}
