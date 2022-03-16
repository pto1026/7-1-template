import React from "react";
import Head from "next/head";
import ButtonPrimary from "../components/button-primary";
import ButtonOutline from "../components/button-outline";
import Feature from "../components/feature";
import Features from "../components/features";
import ImageBox from "../components/img-box";
import StatBox from "../components/stat-box";
import AboutUs from "../components/about-us";
import AboutSection from "../components/about-section";
import StatsSection from "../components/stats-section";
import FeaturesBtns from "../components/features-btns";
import Quote from '../components/quote';

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
        <AboutSection />
        <StatsSection />
        <section className="section-features container u-margin-bottom-120">
          <div className="section-features__header u-text-center">
            <div className="u-text-main">
              <h2 className="heading-secondary u-margin-bottom-20">
                Product Feature Grid
              </h2>
            </div>
            <h3 className="heading-tertiary u-margin-bottom-48">
              Make more out of your content
            </h3>
          </div>
          <Features />
        </section>
        <section className="section-about-us container u-margin-bottom-120">
          <ImageBox />
          <AboutUs />
        </section>
        <section className="section-product-features container u-padding-top-48">
          <div className="section-product-features__header u-text-center">
            <div className="u-text-main">
              <h2 className="heading-secondary u-margin-bottom-32">
                Product Features
              </h2>
            </div>
            <h3 className="heading-tertiary u-margin-bottom-48">
              Make your vision better than the others
            </h3>
          </div>

          <div className="section-product-features__toggle u-margin-bottom-96">
            <FeaturesBtns />
          </div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate ducimus numquam asperiores modi tempora error!
                Architecto nam amet illum hic. Tempora maiores atque nisi
                laboriosam nobis quam cum facilis nulla.
              </p>
              <Quote
                src="imgs/profile-photo-resized.jpg"
                alt="Woman profile pic"
                name="Founder at Prestige"
              >
                {" "}
                &quot;You can't continue to win if you forget everything you have learned.&quot;
              </Quote>
            </div>
            <div className="product-feature__image-col"></div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
