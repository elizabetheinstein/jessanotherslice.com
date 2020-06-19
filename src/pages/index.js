import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import SEO from "../components/seo";
import { Restaurant } from "../components/restaurant";


const Index = () => (
  <Layout>
    <SEO title="jessanotherslice" />
    <About />
    <Restaurant />
  </Layout>

);

export default Index;
