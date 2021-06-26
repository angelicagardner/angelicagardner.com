import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello, world!</h1>
    <p>
      Welcome to my portfolio website. This is currently a work in progress,
      more is coming soon!
    </p>
    <p>
      This website is created with{" "}
      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
        Gatsby
      </a>
      :
    </p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
