import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const landingPage = get(this.props, 'data.contentfulLandingPage')
    console.log(landingPage)

    return (
      <Layout location={this.props.location}>
        <div className="two-even-columns-grid home-page__welcome">
          <div className="container two-even-columns-grid__container">
            <div className="two-even-columns-grid__left-column home-page__left-section">
              <div className="container two-even-columns-grid__left-column-container">
                <h1 className="home-page__heading">{landingPage.header}</h1>
                <div className="home-page__block__mobile">
                  <p className="home-page__text">{landingPage.subHeader}</p>
                  <a
                    href="/manufacturers"
                    title="Learn More"
                    className="LinkButton HomeLinkButton home-page__button-link"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="two-even-columns-grid__right-column home-page__right-section">
              <div className="container two-even-columns-grid__right-column-container">
                <div className="home-page__right-section-content">
                  <div className="home-page__block">
                    <p className="home-page__text">{landingPage.subHeader}</p>
                    <a
                      href="/manufacturers"
                      title="Learn More"
                      className="LinkButton HomeLinkButton home-page__button-link"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page__manufacturers">
          <div className="container">
            <div className="home-page__manufacturers-section home-page__right-section-content">
              <h2 className="home-page__sub-heading home-page__sub-heading--long">
                Drive 3x higher coverage, 5x higher adherence
              </h2>
              <div className="home-page__block">
                <p className="home-page__text">
                  Provide improved patient experience while ensuring more
                  patients get access to, and stay, on therapies
                </p>
                <a
                  href="/manufacturers"
                  title="Learn More"
                  className="LinkButton HomeLinkButton home-page__button-link"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulLandingPage {
      header
      subHeader
      subHeaderTitle
      subHeaderSubTitle
    }
  }
`
