export default function AboutSection() {
  return (
    <section className="about u-margin-bottom-96">
      <div className="about__left">
        <img
          className="about__image"
          src="imgs/about-image.jpg"
          alt="Picture of keyboard representing prgramming"
        />
      </div>
      <div className="about__box u-text-white u-text-center">
        <h2 className="heading-secondary u-margin-bottom-20 ">
          CSS files included
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-30">
          Get the CSS files, all included with customizable options.
        </h3>
        <p className="about__paragraph u-margin-bottom-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi enim
          laboriosam ratione doloribus fuga quis asperiores?
        </p>
        <ButtonOutline href="#">Try now for free</ButtonOutline>
      </div>
    </section>
  );
}
