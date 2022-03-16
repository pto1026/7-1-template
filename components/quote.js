export default function Quote({src, alt, name, children}) {
  return (
    <div className="quote">
      <img
        className="quote__profile-image"
        src={src}
        alt={alt}
      />
      <div className="quote__text-box">
        <p className="quote__paragraph">
         {children}
        </p>
        <p className="quote__name">{name}</p>
      </div>
    </div>
  );
}
