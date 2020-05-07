import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientsList from "../components/ClientsList"
import "../components/about.less"

// Icons imports
import IconWordpress from "../components/icon-components/IconWordpress"
import IconPhp from "../components/icon-components/IconPhp"
import IconLaravel from "../components/icon-components/IconLaravel"
import IconHeroku from "../components/icon-components/IconHeroku"
import IconJs from "../components/icon-components/IconJS"
import IconReact from "../components/icon-components/IconReact"
import IconD3 from "../components/icon-components/IconD3"
import IconNode from "../components/icon-components/IconNode"
import IconWebpack from "../components/icon-components/IconWebpack"
import IconSass from "../components/icon-components/IconSass"
import IconDjango from "../components/icon-components/IconDjango"
import IconBootstrap from "../components/icon-components/IconBootstrap"
import IconTailwind from "../components/icon-components/IconTailwind"
import IconCSS3 from "../components/icon-components/IconCSS3"
import IconHTML from "../components/icon-components/IconHTML"

const clientsList = [
  {
    client: {
      "name" : "US Diplomacy Museum",
      "image" : "state-department-seal.png",
      "link" : "https://www.diplomacy.gov"
    }
  },
   {
    client : {
    "name" : "Apple",
    "image" : "iphone-11-invite.jpg",
    "link" : "https://www.apple.com"
  }
  },
  {
    client : {
      "name" : "Meals on Wheels",
      "image" : "meals-on-wheels-logo.png",
      "link" : "https://www.mealsonwheels.org"
    }
    } ,
  {
    client : {
    "name": "IB.TC",
    "image": "ibtc-logo.png",
    "link" : "https://ib.tc"
    }
  },
  {
    client : {
    "name" : "The U.S. Grains Council",
    "image": "grains-logo.jpg",
    "link": ""
    }
  },
  {
    client : {
    "name": "The American Home Appliances Peeps",
    "image": "AHAM-Logo_Transparent.png",
    "link": "https://blog.aham.org"
    }
  },
  {
    client : {
    "name": "The American Institute of Architects",
    "image": "american-architects-logo.jpg",
    "link": "https://aia.org"
    }
  },
  {
    client : {
    "name": "The American Geophysical Union",
    "image": "american-geophysical-logo.png",
    "link": ""
    }
  },
]

const AboutPage = () =>{
  const [entered, setEntered] = useState(false);
  return (
 
  <Layout>
    <SEO title="About" />
    <h2> Clients </h2>
    <ClientsList clients={clientsList} />
    <h2>Tech</h2>
    <section className="section-tech">
      <div className="tech">
        <h3> Javascript </h3>
          <IconJs/>
          <IconReact/>
          <IconD3/>
      </div>
      <div className="tech">
        <h3> HTML/CSS </h3>
          <IconHTML/>
          <IconCSS3/>
          <IconBootstrap/>
          <IconTailwind/>
      </div>
      <div className="tech">
        <h3> Python </h3>
          Python
          <IconDjango/>
      </div>
      <div className="tech">
        <h3> PHP </h3>
          <IconLaravel/>
          <IconWordpress/>
      </div>
      <div className="tech">
        <h3> Development </h3>
          <IconWebpack/>
          <IconSass/>
      </div>
    </section>

     
  </Layout>
)
  }

export default AboutPage

