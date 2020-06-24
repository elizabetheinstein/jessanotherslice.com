import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import SEO from "../components/seo";
import { BestOf } from "../components/bestOf";


const Index = () => (
  <Layout>
    <SEO title="jessanotherslice" />
    <About />
    <BestOf />
    {/* Contact */}
  </Layout>

);

export default Index;
