import Stars from "./stars";

export default function Review({children, by}) {
  return (
    <figure className="review">
      <div className="u-margin-bottom-24">
        <Stars />
      </div>
      <p className="review__paragraph u-margin-bottom-20">{children}</p>
      <figcaption className="review__by">{by}</figcaption>
    </figure>
  );
}
