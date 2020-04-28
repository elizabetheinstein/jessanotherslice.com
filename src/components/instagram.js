import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Instagram = () => {
    const data = useStaticQuery(graphql`
        query {
            instagram: file(relativePath: { eq: "instagram.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img fluid={data.instagram.childImageSharp.fluid} />
}

export default Instagram;
