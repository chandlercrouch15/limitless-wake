import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from 'reactstrap';
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import "../pages/style.css"

export default ({ data }) => {

  return (
    <Layout>
      <SEO title="Wakeboard Lesson Locations" keywords={[ `locations`, `wakeboard`, `lessons`, `austin`, `texas`, `lake`, `travis`, `limitless`, `wake`, `chandler`, `crouch`]} />
      <Container>

        {/* Locations Page Title */}
        <Row>
          <Col xs="12">
            <h1 style={{ textAlign: `center` }}>{data.markdownRemark.frontmatter.title}</h1>
          </Col>
        </Row>

        {/* Mapping Through and Rendering The Locations */}
        <Row>
          <Col xs="12" md="4" style={{ margin: `auto` }}>
            {data.markdownRemark.frontmatter.locations.map((location) => {
              return (
                <div style={{ textAlign: `center` }}>
                  <strong>{location.location}</strong>
                </div>
              )
            })}
          </Col>

          {/* Rendering the Locations iFrame map */}
          <Col xs="12" md="8">
            <iframe title="lesson locations map" style={{ maxWidth: `100%`, maxHeight: `60%` }} src={data.markdownRemark.frontmatter.mapurl} width="640" height="480"></iframe>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        mapurl
        locations {
          location
        }    
      }
   }
  }
`