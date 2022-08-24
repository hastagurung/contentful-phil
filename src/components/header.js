import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="header" id="pageHeader">
    <div className="container">
      <Link className="header__logo" href="/" title="Phil">
        <img src="/img/icons/phil-logo-m.svg" alt="Logo of Phil" />
      </Link>
      <button
        className="button header__navbar-switch mobile-view"
        onclick="toggleMobileNavigation()"
      >
        <img
          src="/img/icons/hamburger.svg"
          alt="Logo of Phil"
          className="button__image-hamburger"
        />
        <img
          src="/img/icons/times.svg"
          alt="Logo of Phil"
          className="button__image-close"
        />
      </button>
      <div className="desktop-view">
        <ul className="header__nav">
          <li className="header__nav__item">
            <Link href="/" className="header__nav__link">
              Home
            </Link>
          </li>
          <li className="header__nav__item">
            <Link href="/blog" className="header__nav__link">
              News & Press
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="header__dropdown mobile-view" id="headerDropdown">
      <div className="container">
        <ul className="header__dropdown__nav">
          <li className="header__dropdown__item">
            <Link href="/manufacturers" className="header__dropdown__link">
              Manufacturers
            </Link>
          </li>
          <li className="header__dropdown__item">
            <Link href="https://my.phil.us/" className="header__dropdown__link">
              Patients
            </Link>
          </li>
          <li className="header__dropdown__item">
            <Link href="https://blog.phil.us" className="header__dropdown__link">
              Insights
            </Link>
          </li>
          <li className="header__dropdown__item">
            <Link href="/press-releases" className="header__dropdown__link">
              News & Press
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
