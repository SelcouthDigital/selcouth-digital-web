/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import '../assets/styles/index.sass'
import SelcouthDigitalLogo from './../assets/images/selcouthdigital-logo-purple.svg'

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
          <div
            data-collapse='all'
            data-animation='over-right'
            data-duration='400'
            data-doc-height='1'
            data-no-scroll='1'
            role='banner'
            className='navbar w-nav'>
            <div className='container header w-container'>
              <div className='div-block-2'>
                <a
                  href='index.html'
                  aria-current='page'
                  className='logo-block w-nav-brand w--current'>
                  <img src={SelcouthDigitalLogo} alt='' className='logo' />
                </a>
                <div className='div-block-3'>
                  <form action='/search' className='search w-form' data-ix='search-button'>
                    <input
                      type='search'
                      className='search-input w-input'
                      maxlength='256'
                      name='query'
                      data-ix='search-input'
                      placeholder='Search…'
                      id='search'
                      required=''
                    />
                    <input type='submit' value='⌕' className='search-button w-button' />
                  </form>
                  <div className='menu-button w-nav-button'>
                    <div className='w-icon-nav-menu'></div>
                  </div>
                </div>
              </div>
              <nav role='navigation' className='nav-menu w-nav-menu'>
                <a href='#' className='navbar-close-icon w-inline-block' data-ix='close-navigation'>
                  <img src='images/Icon-close-thin.png' alt='' className='image-4' />
                </a>
                <div className='nav-color-overlay'>
                  <a href='index.html' aria-current='page' className='nav-link w--current'>
                    HOME
                  </a>
                  <a href='about-us.html' className='nav-link'>
                    ABOUT US
                  </a>
                  <a href='our-work.html' className='nav-link'>
                    OUR WORK
                  </a>
                  <a href='categories.html' className='nav-link'>
                    BLOG
                  </a>
                  <a href='meet-the-team.html' className='nav-link'>
                    MEET THE TEAM
                  </a>
                  <a href='contact.html' className='nav-link'>
                    CONTACT
                  </a>
                  <div className='nav-content-block'>
                    <div className='nav-block-title'>
                      About <strong>Selcouth Digital</strong>.
                    </div>
                    <p className='nav-text'>
                      We&#x27;re an on-demand, product design, engineering and agile delivery
                      partner.
                      <br />
                      <br />
                      We&#x27;ve been trusted by one the most iconic companies from around the
                      world. Take a look at our work or get in touch.
                    </p>
                    <a href='about-us.html' className='nav-read-more-link'>
                      More About us
                    </a>
                    <a href='hire-uk-based-developers.html' className='nav-read-more-link'>
                      Hire us
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {children}
          <div className='floating-footer'>
            <div className='container header w-container'>
              <div className='footer-nav-text'>
                <span className='text-span-2'>© All rights reserved by </span>
                <a href='http://selcouth.digital' className='footer-link'>
                  <span className='text-span-2'>Selcouth Digital LTD</span>
                </a>
                .
                <a href='http://selcouth.digital' className='footer-link'>
                  <span className='text-span-2'>
                    <br />
                  </span>
                </a>
                An on-demand product design, software engineering and agile delivery partner.
                <a href='http://selcouth.digital' className='footer-link'>
                  <span className='text-span-2'>
                    <br />
                  </span>
                </a>
                <span className='text-span-2'>
                  <br />
                  Kemp House, 152-160 City Road
                  <br xmlns='http://www.w3.org/1999/xhtml' />
                  London, EC1V 2NX
                  <br />
                </span>
                <a
                  href='mailto:info@selcouth.digital?subject=Selcouth%20Digital%20Support'
                  className='footer-link'>
                  <span className='text-span-2'>info@selcouth.digital</span>
                </a>
                <br />
                <br />
                Registered in England and Wales under Company No.: 10264514
                <br />
                VAT reg. No.: 271469878
              </div>
              <div className='footer-social-media w-clearfix'>
                <a
                  href='https://www.facebook.com/selcouthdigital'
                  className='bottom-footer-link w-inline-block'>
                  <img src='images/004-facebook-logo.svg' width='40' height='40' alt='' />
                </a>
                <div className='bottom-footer-divider'>/</div>
                <a
                  href='https://www.twitter.com/selcouthdigital'
                  className='bottom-footer-link w-inline-block'>
                  <img src='images/003-twitter.svg' width='40' height='40' alt='' />
                </a>
                <div className='bottom-footer-divider'>/</div>
                <a
                  href='https://www.youtube.com/c/selcouthdigital'
                  className='bottom-footer-link w-inline-block'>
                  <img src='images/yt_icon.svg' width='40' height='40' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
