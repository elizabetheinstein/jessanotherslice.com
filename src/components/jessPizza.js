import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const JessPizza = () => {
  const data = useStaticQuery(graphql`
    query {
      jess: file(relativePath: { eq: "jess-pizza.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.jess.childImageSharp.fluid} />
};

export default JessPizza;
