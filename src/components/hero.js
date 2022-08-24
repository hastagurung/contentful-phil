import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className="news-press-banner">
    <div className="container">
      <h1 className="home-page__heading">News & Press</h1>
    </div>
  </div>
)

export default Hero
