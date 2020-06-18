import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import SEO from "../components/seo";
import GoogleMap from "../components/googleMap";


const Index = () => (
  <Layout>
    <SEO title="jessanotherslice" />
    <About />
    <GoogleMap />
  </Layout>

);

export default Index;
