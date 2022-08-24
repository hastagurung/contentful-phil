import React from 'react'

import './variables.css'
import './global.css'
import '../assets/style.scss'
import Seo from './seo'
import Navigation from './navigation'
import Header from './header'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Header />
        {/* <Navigation /> */}
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
