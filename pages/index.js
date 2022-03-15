import React from "react";
import Head from "next/head";
import Button from '../components/button';

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
        <div className="btn--primary">
          <Button href="#">Buy now</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
