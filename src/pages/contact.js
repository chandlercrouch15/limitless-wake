import React from "react"
import Form from "../components/formThree"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960px`,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <SEO title="Contact" keywords={[`contact`, `book`, `lesson`, `wake`, `austin`, `texas`, `surf`]} />
     
      <h1 style={{ marginBottom:`0px`}}>Book A Lesson</h1>
      <h5 style={{ marginBottom:`40px` }}>with Limitless Wake Tech</h5>
      <div className="container" id="form" style={{ maxWidth: `650px`}}>
        <Form/>
      </div>
      <br/>
      <h5>Have Questions?</h5>
      <p>Always feel free to give us a call or send us an email.</p>
      <p><strong>Phone: </strong> 512-270-1735</p>
      <p><strong>Email:</strong> limitlesswaketech@gmail.com</p>
    </div>
  </Layout>
)



export default Contact
