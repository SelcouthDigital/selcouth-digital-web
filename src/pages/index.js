import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import ArrowRight from './../assets/images/Icon-arrow-right-white_1.png'

const IndexPage = ({ data }) => (
  <Layout>
    <div className='section'>
      <div className='container w-container'>
        <div>
          <div className='w-row'>
            <div className='w-clearfix w-col w-col-6'>
              <div className='blog-column latest-projects'>
                <div className='div-block u-space--m'>
                  <h3 className='latest-heading w-clearfix' data-ix='fade-in-on-scroll'>
                    Recent Projects
                  </h3>
                  <a
                    href='projects'
                    className='button outline-button small w-button'
                    data-ix='fade-in-on-scroll-3'>
                    View ALL
                  </a>
                </div>
                <div className='blog-list-wrapper w-dyn-list'>
                  <div role='list' className='blog-list w-dyn-items'>
                    {data.allDatoCmsProject.edges.map(
                      ({ node: project }, index) =>
                        index <= 2 && (
                          <div
                            role='listitem'
                            className='blog-list-item w-dyn-item'
                            data-ix='fade-in-on-scroll'>
                            <div className='blog-post-wrapper w-clearfix' data-ix='blog-post-hover'>
                              <a
                                href={`project-categories/${project.category.slug}`}
                                className='blog-category-title-link'
                                style={{ backgroundColor: project.category.color.hex }}>
                                {project.category.name}
                              </a>
                              <a
                                href={`projects/${project.slug}`}
                                className='post-overlay-block purple w-inline-block'
                                data-ix='blog-image-zoom'>
                                <div className='blog-post-title'>{project.title}</div>
                                <div className='read-more-button'>
                                  <img src={ArrowRight} alt='' className='read-more-arrow' />
                                </div>
                              </a>
                              <div
                                className='blog-image-block'
                                data-ix='blog-post-hover'
                                style={{ backgroundImage: `url(${project.thumbnail.url})` }}
                              />
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className='blog-column'>
                <div className='blog-list-wrapper w-dyn-list'>
                  <div role='list' className='blog-list blog-list-small w-dyn-items w-row'>
                    {data.allDatoCmsProject.edges.map(
                      ({ node: project }, index) =>
                        index > 2 && (
                          <div
                            role='listitem'
                            className='blog-list-item blog-list-small-item w-dyn-item w-col w-col-6'
                            data-ix='fade-in-on-scroll-3'>
                            <div
                              className='blog-post-wrapper small w-clearfix'
                              data-ix='blog-post-hover'>
                              <a href='#' className='blog-category-title-link'>
                                {project.category.name}
                              </a>
                              <a
                                href='#'
                                className='post-overlay-block w-inline-block w-clearfix'
                                data-ix='blog-image-zoom'>
                                <div className='blog-post-title small-title'>{project.title}</div>
                                <div className='read-more-button small'>
                                  <img src={ArrowRight} alt='' className='read-more-arrow' />
                                </div>
                              </a>
                              <div
                                className='blog-image-block small'
                                style={{ backgroundImage: `url(${project.thumbnail.url})` }}
                              />
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
                <div className='blog-list-wrapper hidden w-dyn-list'>
                  <div role='list' className='blog-list w-dyn-items w-row'>
                    <div
                      data-ix='fade-in-on-scroll-3'
                      role='listitem'
                      className='blog-list-item w-dyn-item w-col w-col-6'>
                      <div
                        data-ix='blog-show-author'
                        className='blog-post-wrapper small w-clearfix'>
                        <a href='#' className='blog-category-title-link small'></a>
                        <a
                          href='#'
                          data-ix='blog-image-zoom'
                          className='post-overlay-block small w-inline-block w-clearfix'>
                          <div className='blog-post-title small-title'></div>
                          <div className='read-more-button small'>
                            <img src={ArrowRight} alt='' className='read-more-arrow' />
                          </div>
                        </a>
                        <div className='blog-image-block small'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='blog-list-wrapper hidden w-dyn-list'>
                  <div role='list' className='blog-list w-dyn-items'>
                    <div
                      data-ix='fade-in-on-scroll-2'
                      role='listitem'
                      className='blog-list-item w-dyn-item'>
                      <div data-ix='blog-show-author' className='blog-post-wrapper w-clearfix'>
                        <a href='#' className='blog-category-title-link'></a>
                        <div data-ix='hide-author-block' className='post-author-block w-clearfix'>
                          <div className='post-author-image'></div>
                          <a href='#' className='post-author-title'></a>
                          <div className='blog-post-date-title'></div>
                        </div>
                        <a
                          href='#'
                          data-ix='blog-image-zoom'
                          className='post-overlay-block w-inline-block'>
                          <div className='blog-post-title'></div>
                          <div className='read-more-button'>
                            <img
                              src='images/Icon-arrow-right-white_1.png'
                              alt=''
                              className='read-more-arrow'
                            />
                          </div>
                        </a>
                        <div className='blog-image-block'></div>
                      </div>
                    </div>
                  </div>
                  <div className='empty-state w-dyn-empty'>
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
              {/*<div className='blog-column right' data-ix='fade-in-on-scroll-3'>
                <h3 className='u-space--m latest-heading' data-ix='fade-in-on-scroll-2'>
                  Youtube Series
                </h3>
                <div className='blog-list-wrapper w-dyn-list'>
                  <div role='list' className='w-dyn-items'>
                    <div role='listitem' className='blog-list-item w-dyn-item'>
                      <div className='event-wrapper w-clearfix' data-ix='event-zoom'>
                        <div className='event-image-block'></div>
                        <a
                          href='#'
                          className='post-overlay-block w-inline-block'
                          data-ix='event-zoom'></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
            <div className='w-clearfix w-col w-col-6'>
              <div className='blog-column latest-blog-posts'>
                <h3 className='u-space--m latest-heading' data-ix='fade-in-on-scroll-2'>
                  Latest Blog Posts
                </h3>
                <div className='blog-list-wrapper w-dyn-list'>
                  <div role='list' className='blog-list w-dyn-items'>
                    {data.allDatoCmsBlogPost.edges.map(
                      ({ node: post }, index) =>
                        index <= 1 && (
                          <div
                            data-ix='fade-in-on-scroll-2'
                            role='listitem'
                            className='blog-list-item w-dyn-item'>
                            <div
                              data-ix='blog-show-author'
                              className='blog-post-wrapper medium w-clearfix'>
                              <a
                                href={`blog-categories/${post.category.slug}`}
                                className='blog-category-title-link'
                                style={{ backgroundColor: post.category.color.hex }}>
                                {post.category.name}
                              </a>
                              <div
                                data-ix='hide-author-block'
                                className='post-author-block w-clearfix'>
                                <div
                                  className='post-author-image'
                                  style={{
                                    backgroundImage: `url(${post.writtenBy.portraitPhoto.url})`,
                                  }}></div>
                                <a
                                  href={`authors/${post.writtenBy.slug}`}
                                  className='post-author-title'>
                                  {post.writtenBy.name}
                                </a>
                                <div className='blog-post-date-title'>{post.published}</div>
                              </div>
                              <a
                                href={`posts/${post.slug}`}
                                data-ix='blog-image-zoom'
                                className='post-overlay-block w-inline-block'>
                                <div className='blog-post-title fire'>{post.name}</div>
                                <div className='read-more-button'>
                                  <img src={ArrowRight} alt='' className='read-more-arrow' />
                                </div>
                              </a>
                              <div
                                className='blog-image-block medium'
                                style={{ backgroundImage: `url(${post.image.url})` }}
                              />
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
                <div className='blog-list-wrapper w-dyn-list'>
                  <div role='list' className='blog-list blog-list-small w-dyn-items w-row'>
                    {data.allDatoCmsBlogPost.edges.map(({ node: post }, index) =>
                      index > 1 && index <= 5 ? (
                        <div
                          data-ix='fade-in-on-scroll-3'
                          role='listitem'
                          className='blog-list-item blog-list-small-item w-dyn-item w-col w-col-6'>
                          <div
                            data-ix='blog-show-author'
                            className='blog-post-wrapper small w-clearfix'>
                            <a
                              href={`blog-categories/${post.category.slug}`}
                              className='blog-category-title-link small'
                              style={{ backgroundColor: post.category.color.hex }}>
                              {post.category.name}
                            </a>
                            <a
                              href={`posts/${post.slug}`}
                              data-ix='blog-image-zoom'
                              className='post-overlay-block small w-inline-block w-clearfix'>
                              <div className='blog-post-title small-title fire'>{post.name}</div>
                              <div className='read-more-button small'>
                                <img src={ArrowRight} alt='' className='read-more-arrow' />
                              </div>
                            </a>
                            <div
                              className='blog-image-block small'
                              style={{ backgroundImage: `url(${post.image.url})` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className='empty-state w-dyn-empty'>
                          <div>No items found.</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className='blog-column right'>
                <div className='blog-list-wrapper w-dyn-list'>
                  <div role='list' className='blog-list w-dyn-items'>
                    {data.allDatoCmsBlogPost.edges.map(({ node: post }, index) =>
                      index > 5 && index <= 7 ? (
                        <div
                          data-ix='fade-in-on-scroll'
                          role='listitem'
                          className='blog-list-item w-dyn-item'>
                          <div
                            data-ix='blog-show-author'
                            className='blog-post-wrapper medium w-clearfix'>
                            <a
                              href='#'
                              className='blog-category-title-link'
                              style={{ backgroundColor: post.category.color.hex }}>
                              {post.category.name}
                            </a>
                            <div
                              data-ix='hide-author-block'
                              className='post-author-block w-clearfix'>
                              <div
                                className='post-author-image'
                                style={{
                                  backgroundImage: `url(${post.writtenBy.portraitPhoto.url})`,
                                }}></div>
                              <a href='#' className='post-author-title'>
                                {post.writtenBy.name}
                              </a>
                              <div className='blog-post-date-title'>{post.published}</div>
                            </div>
                            <a
                              href='#'
                              data-ix='blog-image-zoom'
                              className='post-overlay-block w-inline-block'>
                              <div className='blog-post-title fire'>{post.name}</div>
                              <div className='read-more-button'>
                                <img src={ArrowRight} alt='' className='read-more-arrow' />
                              </div>
                            </a>
                            <div
                              className='blog-image-block medium'
                              style={{ backgroundImage: `url(${post.image.url})` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className='empty-state w-dyn-empty'>
                          <div>No items found.</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-ix='fade-in-on-scroll-3' className='read-more-block'>
          <div className='read-more-overlay'>
            <div className='read-more-title'>Want to continue reading?</div>
            <a href='blog' className='button outline-button secondary w-button'>
              View Full Blog archive
            </a>
          </div>
          <div className='blog-list-wrapper w-dyn-list'>
            <div role='list' className='blog-list w-dyn-items w-row'>
              {data.allDatoCmsBlogPost.edges.map(({ node: post }, index) =>
                index > 7 && index <= 9 ? (
                  <div
                    data-ix='fade-in-on-scroll'
                    role='listitem'
                    className='blog-list-item w-dyn-item w-col w-col-6'>
                    <div
                      data-ix='blog-show-author'
                      className='blog-post-wrapper archive w-clearfix'>
                      <a href='#' className='blog-category-title-link'></a>
                      <div data-ix='hide-author-block' className='post-author-block w-clearfix'>
                        <div className='post-author-image'></div>
                        <a href='#' className='post-author-title'></a>
                        <div className='blog-post-date-title'></div>
                      </div>
                      <a
                        href='#'
                        data-ix='blog-image-zoom'
                        className='post-overlay-block w-inline-block'>
                        <div className='blog-post-title fire'></div>
                        <div className='read-more-button'>
                          <img src={ArrowRight} alt='' className='read-more-arrow' />
                        </div>
                      </a>
                      <div className='blog-image-block archive'></div>
                    </div>
                  </div>
                ) : (
                  <div className='empty-state w-dyn-empty'>
                    <div>No items found.</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className='read-more-fixed-block' data-ix='show-hire-us-block'>
          <a href='#' data-ix='close-read-more' className='close-read-more-button w-inline-block'>
            <img src='images/Icon-close-thin.png' alt='' className='close-icon' />
          </a>
          <div className='blog-post-wrapper read-more w-clearfix'>
            <a
              href='hire-uk-based-developers.html'
              className='post-overlay-block read-more w-inline-block w-clearfix'
              data-ix='blog-image-zoom'>
              <p className='blog-post-title read-more'>
                Looking for a UK based agile delivery partner?
              </p>
              <div className='also-read-title'>HIRE US</div>
              <div className='read-more-button small'>
                <img src={ArrowRight} alt='' className='read-more-arrow' />
              </div>
            </a>
            <div className='blog-image-block read-more'></div>
          </div>
        </div>
      </div>
    </div>
    {/*<Masonry className='showcase'>
      {data.allDatoCmsProject.edges.map(({ node: work }) => (
        <div key={work.id} className='showcase__item'>
          <figure className='card'>
            <Link to={`/projects/${work.slug}`} className='card__image'>
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className='card__caption'>
              <h6 className='card__title'>
                <Link to={`/projects/${work.slug}`}>{work.title}</Link>
              </h6>
            </figcaption>
          </figure>
        </div>
      ))}
      </Masonry>*/}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsProject(limit: 7, sort: { fields: published, order: DESC }) {
      edges {
        node {
          author {
            name
          }
          category {
            name
            color {
              hex
            }
            slug
          }
          thumbnail {
            url
          }
          slug
          title
        }
      }
    }
    allDatoCmsBlogPost(limit: 7, sort: { order: DESC, fields: published }) {
      edges {
        node {
          writtenBy {
            name
            portraitPhoto {
              url
            }
            slug
          }
          category {
            name
            color {
              hex
            }
            slug
          }
          published
          slug
          name
          image {
            url
          }
        }
      }
    }
  }
`
