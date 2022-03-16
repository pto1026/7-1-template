import Quote from './quote';

export default function ProductFeature() {
  return (
    <div className="product-feature">
      <div className="product-feature__text-col">
        <div className="u-text-main u-margin-bottom-24">
          <h2 className="heading-secondary">Product Feature 1</h2>
        </div>
        <h3 className="heading-tertiary u-margin-bottom-32">
          Understand and grow to meet your future needs
        </h3>
        <p className="product-feature__paragraph u-margin-bottom-32 u-border-bottom u-padding-bottom-32">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ducimus numquam asperiores modi tempora error! Architecto nam amet
          illum hic. Tempora maiores atque nisi laboriosam nobis quam cum
          facilis nulla.
        </p>
        <Quote
          src="imgs/profile-photo-resized.jpg"
          alt="Woman profile pic"
          name="Founder at Prestige"
        >
          {" "}
          &quot;You can&apos;t continue to win if you forget everything you have
          learned.&quot;
        </Quote>
      </div>
      <div className="product-feature__image-col">
        <div className="product-feature_img-box">
          <img
            src="imgs/portfolio.jpg"
            alt="Portfolio image"
            className="product-feature__img product-feature__img--one"
          />
          <img
            src="imgs/doge.jpg"
            alt="Dogecoin image"
            className="product-feature__img product-feature__img--two"
          />
          <img
            src="imgs/amc.jpg"
            alt="AMC image"
            className="product-feature__img product-feature__img--three"
          />
        </div>
      </div>
    </div>
  );
}
