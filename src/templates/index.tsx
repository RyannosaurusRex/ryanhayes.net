import { graphql } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import IndexLayout from '../layouts';
import config from '../website-config';
import Pagination from '../components/Pagination';
import FromTheBlog from '../components/FromTheBlog';
import { PageContext } from './post';
import Hero from '../components/Hero';

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexProps> = props => {
  const width = props.data.header.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
  const height = String(Number(width) / props.data.header.childImageSharp.fluid.aspectRatio);


  return (
    <IndexLayout imageHeight={height} imageWidth={width} imageSrc={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}>

      <div id="hero" className="relative bg-gray-50 overflow-hidden">
        <Hero imageSrc={props.data.logo.childImageSharp.fixed.src} />
      </div>
      <div>
        {/* {props.data.logo ? (
                  <img
                    src={props.data.logo.childImageSharp.fixed.src}
                    alt={config.title}
                  />
                ) : (
                  config.title
                )} */}
      </div>
      <FromTheBlog pages={props.data.allMarkdownRemark.edges} />
      {props.children}
      <Pagination currentPage={props.pageContext.currentPage} numPages={props.pageContext.numPages} />
    </IndexLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/ryan-hayes.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    header: file(relativePath: { eq: "img/things/forest-drive.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { draft: { ne: true } } },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            draft
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
