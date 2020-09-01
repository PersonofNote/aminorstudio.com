import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"

const shortcodes = { Link }

export default function PostTemplate({ data }) {
  if (typeof(data) !== 'undefined'){
    const mdx = data.mdx;
    console.log("Post:")
    console.log(mdx.frontmatter.title);

    const tagList = mdx.frontmatter.tags.map(tag => 
          <span className="post-tag" style={{
          padding: `0 0.2rem`, margin: `0 0.2rem`, border: `1px solid lightgray`
          }}
            key={mdx.frontmatter.tags.indexOf(tag)}> {tag} </span>
        )
    return (
      <Layout>
      {/* <Img className="featured-post-image" fluid={post.frontmatter.coverImage.childImageSharp.fluid} /> */}
      <div style={{
      maxWidth: 750,
      margin: 'auto'
      }}>
        <h1 style={{
          textTransform: `capitalize`,}}
          >{mdx.frontmatter.title}
        </h1>
        <span style={{
          color: `gray`,
          }}>{mdx.timeToRead}-minute read</span>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <div style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `flex-start`,
          flexWrap: `wrap`
          }}> Tagged: {tagList}</div>
      </div>
      </Layout>
    
    )
    }else{
      console.log("Error");
      return(
        <Layout>
          <h1> Hmm, something went wrong. </h1>
        </Layout>
      )
    }
}
export const postQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        tags
      }
    }
  }
`