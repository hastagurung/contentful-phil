import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class LandingPage extends React.Component {
  render() {
    const landingPage = get(this, 'data.contentfulLandingPage')
    console.log(landingPage)
    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        {landingPage}
      </Layout>
    )
  }
}

export default LandingPage

export const pageQuery = graphql`
  query LandingIndexQuery {
    contentfulLandingPage {
      header
      subHeader
      subHeaderTitle
      subHeaderSubTitle
    }
  }
`
