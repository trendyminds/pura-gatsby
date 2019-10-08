import React from "react";
import Layout from "../globals/Layout";
import SEO from "../globals/SEO";
import Callout from "../components/Callout";

import largePlaceholderImg from "../images/placeholder--large.jpg";
import smallPlaceholderImg from "../images/placeholder--small.jpg";

export default () => (
  <Layout>
    <SEO title="Home" />

    <p>
      Looking for documentation and features? Head{" "}
      <a href="https://github.com/trendyminds/pura/">back to the GitHub repo</a>
      .
    </p>

    <h2>Responsive images using Picturefill</h2>
    <picture>
      <source srcSet={largePlaceholderImg} media="(min-width: 450px)" />
      <img srcSet={smallPlaceholderImg} alt="The TrendyMinds office" />
    </picture>

    <Callout
      heading="Looking for documentation and features?"
      body="Head <a href='https://github.com/trendyminds/pura/'>back to the GitHub repo</a> to learn more about Pura."
    />
  </Layout>
);
