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
import ButtonTransparent from "../components/button-transparent";
import ButtonWhite from "../components/button-white";
import CustomerStory from "../components/customer-story";
import Reviews from "../components/reviews";
import PricingCards from "../components/pricing-cards";
import Question from "../components/question";
import Faq from "../components/faq";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Elite Services | Find what you are looking for</title>
      </Head>
      <div className="header container u-text-center">
        <div className="u-text-main">
          <h2 className="heading-secondary u-margin-bottom-32">
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
              <h2 className="heading-secondary u-margin-bottom-32">
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
              <Reviews />
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

        <section className="section-customer-story container u-margin-bottom-120">
          <img
            className="section-customer-story__image"
            src="imgs/flower.jpg"
            alt="Flower image"
          />
          <CustomerStory />
        </section>

        <section className="section-pricing container">
          <header className="section-pricing__header u-margin-bottom-48">
            <div className="section-pricing__text">
              <div className="u-text-main u-margin-bottom-32">
                <h2 className="heading-secondary">Pricing plan</h2>
              </div>
              <h3 className="heading-tertiary">
                Simple, affordable pricing for everyone.
              </h3>
            </div>
            <div className="section-pricing__toggle">
              <span className="section-pricing__monthly">Monthly</span>
              <img
                className="section-pricing__toggle-icon"
                src="icons/toggle-left-fill.svg"
                alt="Toggle icon"
              />
              <span className="section-pricing__yearly">Yearly</span>
            </div>
          </header>
          <PricingCards />
        </section>

        <section className="section-faq container u-padding-top-96">
          <header className="section-faq__header u-text-center u-margin-bottom-48">
            <div className="u-text-main u-margin-bottom-32">
              <h2 className="heading-secondary">Common Questions</h2>
            </div>
            <h3 className="heading-tertiary">Frequently Asked Questions</h3>
          </header>

          <Faq />
        </section>

        <section className="section-resources container u-padding-top-96">
          <header className="section-resources__header u-text-center u-margin-bottom-60">
            <div className="u-text-main u-margin-bottom-32">
              <h2 className="heading-secondary">Resources</h2>
            </div>
            <h3 className="heading-tertiary">Read latest blogs</h3>
          </header>

          <div className="resources u-margin-bottom-120">
            <figure className="blog-post">
              <img
                className="blog-post__image u-margin-bottom-48"
                src="imgs/suit-man-resized.jpg"
                alt="Man in a red suit"
              />
              <figcaption className="blog-post__text">
                <h4 className="heading-four u-margin-bottom-32">
                  The Art of Reading Customers
                </h4>
                <p className="blog-post__paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error soluta iure fugit quibusdam assumenda quaerat illo eos
                  doloremque! Minima laudantium eum magnam odio odit recusandae.
                </p>
              </figcaption>
            </figure>
            <figure className="blog-post">
              <img
                className="blog-post__image u-margin-bottom-48"
                src="imgs/bookshelf-resized.jpg"
                alt="Bookshelf"
              />
              <figcaption className="blog-post__text">
                <h4 className="heading-four u-margin-bottom-32">
                  Fix the one mistake everyone makes
                </h4>
                <p className="blog-post__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  molestias assumenda itaque in recusandae a accusamus dolores
                  nostrum placeat inventore repudiandae earum sint, quo
                  laudantium quia dolorum nesciunt porro veritatis!
                </p>
              </figcaption>
            </figure>
            <figure className="blog-post">
              <img
                className="blog-post__image u-margin-bottom-48"
                src="imgs/whiteboard-presentation-resized.jpg"
                alt="Whiteboard presentation"
              />
              <figcaption className="blog-post__text">
                <h4 className="heading-four u-margin-bottom-32">
                  Best tools in the industry
                </h4>
                <p className="blog-post__paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus mollitia reiciendis nemo nesciunt, aspernatur, vero
                  obcaecati odio omnis.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
