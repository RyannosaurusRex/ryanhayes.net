import IndexLayout from '../layouts';
import * as React from 'react';
import { css } from '@emotion/core';

import Helmet from 'react-helmet';

import PageFullContent from './../components/PageFullContent'

const About: React.FC = () => {

  return <IndexLayout>
    <Helmet><title>About Ryan Hayes</title></Helmet>

    <PageFullContent>
      <main id="site-main" >
        <article className="post page">
          <article className="prose xl:prose-xl mx-auto">
            <div className="post-content">
              <h2>About me.</h2>
              <p>Ryan has nearly 15 years of broad and deep software development and business analysis experience working with household name, Fortune 500 clients and startups alike. Ryan has helped teams deliver award-winning applications that drive business processes, site traffic, profit and double-digit company growth.</p>
              <p>Ryan is a nine-time Microsoft MVP Award Winner and winner of numerous product and company awards for project and leadership contributions.</p>
              <p>Ryan holds a B.S. degree in Computer Science from the University of Virginia’s College at Wise, and an M.S. in Software Engineering from George Mason University.</p>
            </div>
          </article>
        </article>
      </main>
    </PageFullContent>
  </IndexLayout>
}

export default About;
