import React from "react";
import Head from "next/head";
import ButtonPrimary from "../components/button-primary";
import ButtonOutline from "../components/button-outline";
import Feature from "../components/feature";
import Features from '../components/features';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Elite Services | Find what you are looking for</title>
      </Head>
      <div className="header container u-text-center">
        <div className="u-text-main">
          <h2 className="heading-secondary u-margin-bottom-20">
            The template for high-performing startups
          </h2>
        </div>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              enim laboriosam ratione doloribus fuga quis asperiores?
            </p>
            <ButtonOutline href="#">Try now for free</ButtonOutline>
          </div>
        </section>
        <section className="stats u-margin-top-120 u-margin-bottom-96">
          <p className="stats__stat">
            100<span className="stats__symbol">+</span>
            <span className="stats__content u-margin-top-20">
              Unique content <br />
              blocks
            </span>
          </p>
          <p className="stats__stat">
            25<span className="stats__symbol">+</span>
            <span className="stats__content u-margin-top-20">
              Carefully crafted <br />
              pages
            </span>
          </p>
          <p className="stats__stat">
            &#60;24 <span className="stats__symbol">hours</span>
            <span className="stats__content u-margin-top-20">
              Average support <br />
              time
            </span>
          </p>
          <p className="stats__stat">
            99<span className="stats__symbol">%</span>
            <span className="stats__content u-margin-top-20">
              Customer <br />
              satisfaction
            </span>
          </p>
        </section>
        <section className="section-features container">
          <div className="section-features__header u-text-center">
            <div className="u-text-main">
              <h2 className="heading-secondary u-margin-bottom-20">
                Product Feature Page
              </h2>
            </div>
            <h3 className="heading-tertiary u-margin-bottom-48">
              Make more out of your content
            </h3>
          </div>
          <Features />
        </section>
      </main>
    </React.Fragment>
  );
}
