"use client";
import { useEffect, useRef } from "react";

const LazyMedia = ({
  src,
  alt,
  width,
  height,
  placeholder,
  className = "",
  type = "image",
  videoProps = {},
}) => {
  const mediaRef = useRef(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (type === "image") {
            el.src = src;
          } else if (type === "video") {
            el.src = src;
            el.load();
          }
          el.classList.remove("loading");
          el.classList.add("loaded");
          observer.unobserve(el);
        }
      });
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [src, type]);

  if (type === "video") {
    return (
      <video
        ref={mediaRef}
        className={`${className} lazy loading`}
        src={placeholder}
        data-src={src}
        width={width}
        height={height}
        poster={placeholder}
        // Default video props, can be overridden by videoProps
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        {...videoProps}
      >
        {alt && <track kind="descriptions" label={alt} />}
      </video>
    );
  }

  // Default to image
  return (
    <img
      ref={mediaRef}
      className={`${className} lazy loading`}
      src={placeholder}
      data-src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default LazyMedia;
