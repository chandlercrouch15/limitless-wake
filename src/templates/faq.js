import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Collapsible from "../components/collapsible"
import { Container } from "reactstrap"
import SEO from "../components/seo"
import "../pages/style.css"
import "./style.css"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="FAQ" keywords={[ `wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `faq` ]} />
      <Container>
        <h1 className="page-title">{data.markdownRemark.frontmatter.title}</h1>
        <div className="collapse-container"style={{ boxShadow: `0 -1px 4px #343a40` }}>
          {data.markdownRemark.frontmatter.faq.map((faq) => {
            return (
              <Collapsible
                button={faq.question}
                content={faq.answer}
              />
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
        faq {
          question
          answer
        }
      }
   }
  }
`