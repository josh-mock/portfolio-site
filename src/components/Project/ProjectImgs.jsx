import LazyImg from "../LazyImg";

export default function ProjectImgs({ imgArray }) {
  return (
    <div className="project__img-container">
      {imgArray.map((img, index) => (
        <div className="project__img-wrapper" key={index}>
          <LazyImg src={img.placeholderUrl} dataSrc={img.image.url} alt={img.image.alt} />
        </div>
      ))}
    </div>
  );
}
