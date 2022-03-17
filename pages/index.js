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
import Quote from "../components/quote";
import ProductFeature from "../components/product-feature";
import Steps from "../components/steps";
import Review from "../components/review";
import Stats from "../components/stats";
import Stat from "../components/stat";
import ButtonUnderline from "../components/button-underline";
import ButtonTransparent from '../components/button-transparent';
import ButtonWhite from '../components/button-white';

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
          <div className="u-margin-bottom-120">
            <ProductFeature />
          </div>
        </section>

        <section className="section-how-it-works container">
          <div className="section-how-it-works__header u-text-center">
            <div className="u-text-main u-margin-bottom-32">
              <h2 className="heading-secondary">How it works</h2>
            </div>
            <h3 className="heading-tertiary u-margin-bottom-60">
              Getting started is as easy as possible...
            </h3>
          </div>
          <div className="u-margin-bottom-120">
            <Steps />
          </div>
        </section>
        <section className="section-reviews u-padding-top-96">
          <div className="container">
            <div className="section-reviews__main u-margin-bottom-48">
              <div className="reviews u-text-center">
                <Review by="Andrew Burlovski - CEO at Prestige">
                  Our customer retention rates doubled. Elite makes it easy to
                  decode product usage and show us what works.
                </Review>
                <Review by="Robert Handrover - Founder at Prestige">
                  We&apos;re building better futures together, thanks to Elite.
                  It helped us see the obvious facts hidden in our data.
                </Review>
              </div>
              <Stats>
                <Stat statistic="4.97/5">
                  Rating on review sites such as Capterra, G2
                </Stat>
                <div className="u-border-top u-padding-top-32">
                  <Stat statistic="87%">
                    87% of our customers say they&apos;d kill another person for
                    our product
                  </Stat>
                </div>
                <div className="u-border-top u-padding-top-32">
                  <Stat statistic="250M+">Users currently loving Elite</Stat>
                </div>
              </Stats>
            </div>
            <div className="u-text-center u-text-main u-padding-bottom-96">
              <ButtonUnderline>See All Reviews &rarr;</ButtonUnderline>
            </div>
          </div>
        </section>

        <section className="section-customer-story container">
          <img
            className="section-customer-story__image"
            src="imgs/flower.jpg"
            alt="Flower image"
          />
          <div className="customer-story u-text-white u-text-center">
            <h2 className="heading-secondary u-margin-bottom-24">
              Customer story
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-30">
              Andre Blisant
            </h3>
            <p className="customer-story__paragraph u-margin-bottom-24">
              &quot;If my product product has a million customers, 500 thousand
              are thanks to Elite&quot;
            </p>
            <div className="customer-story__btns">
              <div className="customer-story__main-btn u-text-main">
                <ButtonWhite>View customer story</ButtonWhite>
              </div>
              <div className="customer-story__transparent-btn">
                <ButtonTransparent>
                  <img
                    src="icons/play-fill.svg"
                    alt="Play icon"
                    className="customer-story__icon"
                  /> Watch story &bull; 5:47
                </ButtonTransparent>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
