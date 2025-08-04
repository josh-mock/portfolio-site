import LazyMedia from "../LazyMedia";

export default function ProjectImgs({ imgArray }) {
  return (
    <div className="project__img-container">
      {imgArray.map((img, index) => (
        <div className="project__img-wrapper" key={index}>
          <LazyMedia
            src={img.placeholderUrl}
            dataSrc={img.url}
            alt={img.alt}
            aspectRatio={img.aspectRatio}
          />
        </div>
      ))}
    </div>
  );
}
