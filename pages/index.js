import React from "react";
import Head from "next/head";
import ButtonPrimary from "../components/button-primary";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Elite Services | Find what you are looking for</title>
      </Head>
      <div className="header container u-text-center">
        <h2 className="heading-secondary u-margin-bottom-20">
          The template for high-performing startups
        </h2>
        <h1 className="heading-primary u-margin-bottom-48">
          Build beautiful, high-retaining websites with Elite.
        </h1>
        <div className="header__button">
          <ButtonPrimary href="#">Buy now</ButtonPrimary>
        </div>
      </div>
      <div className="home-top-divider">
        <img
          className="home-top-divider__image container"
          src="imgs/top-image.jpg"
          alt="Photo of technology and photography items"
        />
      </div>
      <main>
        <section className="about container">
          <div className="about__left">
            <img
              className="about__image"
              src="imgs/about-image.jpg"
              alt="Picture of keyboard representing prgramming"
            />
          </div>
          <div className="about__box u-text-white">
            <h2 className="heading-secondary u-margin-bottom-20">
              CSS files included
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-30">
              Get the CSS files, all included with customizable options.
            </h3>
            <p className="about__paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              enim laboriosam ratione doloribus fuga quis asperiores?
            </p>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
