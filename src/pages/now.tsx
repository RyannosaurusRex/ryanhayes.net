import IndexLayout from '../layouts';
import { Link } from 'gatsby';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';


const About: React.FunctionComponent = () => (
  <IndexLayout>
      <main id="site-main" >
        <article className="post page">
          <PostFullTitle>/Now</PostFullTitle>

          <article className="prose xl:prose-xl">
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
          </article>
        </article>
      </main>
  </IndexLayout>
);

export default About;
