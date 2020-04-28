import React from "react"

import Layout from "../components/layout"
import JessMain from "../components/jessMain"
import Instagram from '../components/instagram'
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="jessanotherslice" />
    <div className="main">
      <div className="about">
        <h1>About</h1>
        <p>Hi I'm Jess, and I'm a pizza foodie based in NYC! Follow my adventures on
          <a href="https://www.instagram.com/jessanotherslice/?hl=en">
            <div className="instagram">
              <Instagram />
            </div>
          </a>
        </p>
        <p>Looking to collab? Email jessanotherslice@gmail.com</p>
      </div>
      <div className="jess-main">
        <JessMain />
      </div>
    </div>

  </Layout >
)

export default Index
