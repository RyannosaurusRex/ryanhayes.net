import IndexLayout from '../layouts';
import { Link } from 'gatsby';
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


const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>/Now</title>
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
            <PostFullTitle>/Now</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
          <div className="post-content">
            <h2>Here’s what I’m focusing on right now:</h2>

            <ul>
              <li>Building and dogfooding a meetup.com competitor called UpGo. <Link to="/contact">Drop me a line to get early access.</Link></li>
              <li>Being the best husband and dad I can be to my wife and my three little kids.</li>
              <li>Leading dev teams at Heartland Payment Systems.</li>
              <li>Co-Organizing and growing TriDev developer meetup.</li>
              <li>I live stream coding and business development every Tuesday at 9PM Eastern on <a href="https://twitch.tv/RyannosaurusRex">Twitch</a>.</li>
              <li><a href="https://youtube.com/ryanhayesnet">Becoming a better speaker by creating more video content.</a></li>
            </ul>
            
            This page is part of the /now movement. It's what I'd tell a friend if I hadn't seen them in a year.

          </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
