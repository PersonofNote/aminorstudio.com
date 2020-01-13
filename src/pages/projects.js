import React from "react"
import ProjectSet from "../components/ProjectSet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SpacepostImage from "../images/spacepost.png"

/* Project template:
 {
    "title" : "New Project",
    "image" : "",
    "description":"",
    "project-link":"",
    "icons" : []
  }

*
*/


const ProjectsInfo = [
  {
    "title" : "Spacepost",
    "image" : SpacepostImage,
    "description":"Developed Spacepost’s branding (Spacedood logo, colors, typography) and landing pages",
    "project-link":"http://www.spacepost.io/",
    "icons" : [
      "icon1", "icon2"
    ]
  },
  {
    "title" : "Huge Quest v0.1",
    "image" : "",
    "description":"Two player exploration game with randomly-generated maps: Find the other player (or a simple AI) and hug them.",
    "project-link":"",
    "icons" : []
  },
  {
    "title" : "New Project",
    "image" : "",
    "description":"",
    "project-link":"",
    "icons" : []
  }
]


const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects Placeholder Page</h1>
    <div className="projects-container">
      <ProjectSet props={ProjectsInfo} />
    </div>
  </Layout>
)

export default ProjectPage
