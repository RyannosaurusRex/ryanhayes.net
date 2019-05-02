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


const Contact: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Contact</title>
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
            <PostFullTitle>Contact</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
          <div className="post-content">
            Hi! I should have a contact page up in the next week or so, but in the meantime, you can send me a message over on <a href="https://twitter.com/RyannosaurusRex">Twitter</a> or <a href="https://www.linkedin.com/in/jryanhayes">LinkedIn</a>, whichever you prefer.
            <br /> <br />
            If you <b>really</b> want to send me a message through a proper contact page here, I'll be live streaming the building of it within the week over on <a href="https://twitch.tv/RyannosaurusRex">Twitch</a>!
          </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Contact;
