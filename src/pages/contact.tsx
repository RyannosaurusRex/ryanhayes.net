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

  .contact-form {
    font-family: inherit;
  }

  .button {
    border-radius: 3px;
  }
  
  .form-wrapper {
    max-width: 600px
    margin-top: 15px;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  textarea {
    width:100%;
    height:150px;
    font-size: 80%;
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
            Need to get in touch? I make it a point to respond to every comment
            on this blog and social media. If email is more appropriate, just fill
            out this form and I'll get back to you.
            <div className="form-wrapper">
              <form className="contact-form" name="contact" data-netlify-recaptcha="true" data-netlify="true" netlify>
                <p>
                  <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                  <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                  <label for="message">Message</label><br/><textarea id="message" name="message" />
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                  <button className="button" type="submit">Send</button>
                </p>
              </form>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Contact;
