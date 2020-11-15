import Link from 'next/link';
import * as React from 'react';

import PageFullContent from '../components/PageFullContent';


const About: React.FunctionComponent = () => (
  <>
      <PageFullContent>
      <main id="site-main">
        <article className="post page">
          <article className="prose xl:prose-xl mx-auto">
          <div className="post-content">
            <h2>Here’s what I’m focusing on right now:</h2>
            <ul>
              <li>Trying to get through the pandemic. (Who isn't?)</li>
              <li>Building and dogfooding a meetup.com competitor called UpGo. <Link href="/contact">Drop me a line to get early access.</Link></li>
              <li>Being the best husband and dad I can be to my wife and my three little kids.</li>
              <li>Volunteering on the board at <a href="https://myfoundersforge.com">Founders Forge</a> and helping entrepreneurs in my area.</li>
              <li>Still playing music at Harvest Community Church</li>
              <li>Leading dev teams at Heartland Payment Systems.</li>
              <li>Co-Organizing and growing <a href="https://tricities.dev">TriDev developer meetup</a>.</li>
              <li>I live stream coding and business development every Tuesday at 9PM Eastern on <a href="https://twitch.tv/RyannosaurusRex">Twitch</a>.</li>
              {/* <li><a href="https://youtube.com/ryanhayesnet">Becoming a better speaker by creating more video content.</a></li> */}
            </ul>
          </div>
          </article>
        </article>
      </main>
      </PageFullContent>
  </>
);

export default About;
