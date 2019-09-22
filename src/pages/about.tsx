import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About Ryan Hayes</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
          <div className="post-content">
            <p>Ryan has well over a decade&nbsp;of software development and business analysis experience working with big-name clients such as Discovery Channel, AOL, Toyota, and the National Academy of Sciences and for companies like Red Hat. Ryan has helped teams deliver award-winning applications that drive business processes, site traffic, profit and company growth. Currently the Owner and Principal Software Architect at Sonata Cove Software, Ryan puts his experience and business creativity to work every day to build amazing solutions for the enterprise web, desktop and mobile platforms.</p>
            <p>Ryan holds a B.S. degree in Computer Science from the University of Virginia’s College at Wise, and an M.S. in Software Engineering from George Mason University.</p>
            <p>Ryan is a four-time Microsoft MVP Award Winner, and a member of the the IE userAgents and Azure Advisors groups&nbsp;at Microsoft.</p>
		      </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
