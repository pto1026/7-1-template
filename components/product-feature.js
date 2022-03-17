import Quote from "./quote";

export default function ProductFeature({ toggle }) {
  if (toggle === 0) {
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
            &quot;You can&apos;t continue to win if you forget everything you
            have learned.&quot;
          </Quote>
        </div>
        <div className="product-feature__image-col">
          <div className="product-feature__img-box">
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
  } else {
    return (
      <div className="product-feature">
        <div className="product-feature__text-col">
          <div className="u-text-main u-margin-bottom-24">
            <h2 className="heading-secondary">Product Feature 2</h2>
          </div>
          <h3 className="heading-tertiary u-margin-bottom-32">
            You must eat well or else the shadow people get you
          </h3>
          <p className="product-feature__paragraph u-margin-bottom-32 u-border-bottom u-padding-bottom-32">
            {" "}
            The shadow people, a horrifying and killer demonic people that pray on the vulnerable and lazy.  Few are lucky enough to survive an encounter with the shadow people, those that do report horros beyound your nightmares... Eat up!
          </p>
          <Quote
            src="imgs/profile-photo-2-resized.jpg"
            alt="Woman profile pic"
            name="Home Baker and Elite Mafia Playbunny"
          >
            {" "}
            &quot;My grandparents were taken by the shadow people, my parents and children too.&quot;
          </Quote>
        </div>
        <div className="product-feature__image-col">
          <div className="product-feature__img-box">
            <img
              src="imgs/asian-food.jpg"
              alt="Asian food bowl"
              className="product-feature__img product-feature__img--one"
            />
          </div>
        </div>
      </div>
    );
  }
}
