import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <div className="two-even-columns-grid spotlight-column-grid">
          <div>
          <div className="container">
            <div className="news-page__title clearfix">
              <div className="left">
                <img src="/img/icons/news.svg" alt="" />
              </div>
              <h5 className="news-page__title__heading">Spotlight</h5>
            </div>
          </div>
          <div className="container two-even-columns-grid__container">
            <div className="two-even-columns-grid__left-column spotlight_left-column spotlight-full">
              <div className="container two-even-columns-grid__left-column-container">
                <div className="news-page__left-content">
                  <h1 className="news-page__heading">Test</h1>
                  <span className="news-page__date">Jan 2, 2006"</span>

                  <div className="news-page__responsive-view">
                    <div className="news-page__responsive-view__image">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <p className="desktop-view-paragraph">description</p>
                  <a
                    className="IconTextLink clearfix left spotlight-read-more"
                    title="Explore Our Market Access Platform"
                    href="#"
                  >
                    <span className="IconTextLink__icon--right">→</span>
                    <span className="IconTextLink__text--auto">Read more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`
