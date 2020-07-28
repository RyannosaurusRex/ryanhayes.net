import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import PageFullContent from '../components/PageFullContent';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const Contact: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <SiteNav />
    <PageFullContent>
      <div className="max-w-3xl mx-auto">
        <div className="prose lg:prose-xl">
          Need to get in touch? I make it a point to respond to every comment
          on this blog and social media. If email is more appropriate, just fill
          out this form and I'll get back to you.
        </div>
      </div>
      <div className="form-wrapper">
        <form method="POST" className="contact-form" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message</label><br /><textarea id="message" name="message" />
          </p>
          <p>
            <button className="button" type="submit">Send ✉</button>
          </p>
        </form>
      </div>
    </PageFullContent>
    <Footer />
  </IndexLayout>
);

export default Contact;
