import * as React from 'react';
import Helmet from 'react-helmet';
// @ts-ignore
import favicon from '../../src/favicon.ico';
import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';

import config from '../website-config';


interface IndexProps {
  className?: string;
  imageHeight?: string;
  imageWidth?: string;
  imageSrc?: string;
}


const IndexLayout: React.FC<IndexProps> = props => {

  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={props.imageSrc}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && <meta name="google-site-verification" content={config.googleSiteVerification} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={props.imageSrc}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={props.imageWidth} />
        <meta property="og:image:height" content={props.imageHeight} />
      </Helmet>

      <SiteNav />
      <div className="">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default IndexLayout;
