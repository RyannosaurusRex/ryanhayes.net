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
            <PostFullTitle>Now</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
          <div className="post-content">
            <h2>Here’s what I’m focusing on right now:</h2>

            <ul>
              <li>Being the best husband and dad I can be to my wife and my three little kids.</li>
              <li>Leading teams at Heartland Payment Systems with some fantastic smart people from my local .NET meetup.</li>
              <li>Moving a *huge* application to Azure.</li>
              <li>Co-Organizing and growing TriDev developer meetup, speaking at other meetups.</li>
              <li><a href="https://youtube.com/ryanhayesnet">Becoming a better speaker by creating more video content.</a></li>
              <li>Volunteering doing a Rock RMS implementation at [Harvest Community Church](https://harvesttn.com) and contributing the the open source project.</li>
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
