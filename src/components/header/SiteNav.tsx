// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import useState from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import Twitch from '../icons/twitch';
import SubscribeModal from '../subscribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';

interface SiteNavProps {
  isHome?: boolean;
}

class SiteNav extends React.Component<SiteNavProps> {
  subscribe = React.createRef<SubscribeModal>();
  //let open = useState("", "");

  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  render() {
    const { isHome = false } = this.props;
    return (
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                            <img className="h-8 w-auto sm:h-10" src="/img/logos/workflow-mark-on-white.svg" alt="" />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Link className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out" to="about">Hey</Link>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Product</a>
                    <a href="#" className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Features</a>
                    <a href="#" className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Marketplace</a>
                    <a href="#" className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Company</a>
                </div>
            </nav>
        </div>

        {/* <!--
    Mobile menu, show/hide based on menu open state.

    Entering: "duration-150 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
    --> */}
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md">
                <div className="rounded-lg bg-white shadow-xs overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img className="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="" />
                        </div>
                        <div className="-mr-2">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg id="close" className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Product</a>
                        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Features</a>
                        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Marketplace</a>
                        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Company</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      // <nav css={[isHome && HomeNavRaise, SiteNavStyles]}>
      //   <SiteNavLeft>
      //     {!isHome && <SiteNavLogo />}
      //     <ul css={NavStyles} role="menu">
      //       {/* TODO: mark current nav item - add class nav-current */}
      //       <li role="menuitem">
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li role="menuitem">
      //         <Link to="/about/">About</Link>
      //       </li>
      //       <li role="menuitem">
      //         <Link to="/now/">/Now</Link>
      //       </li>
      //       <li role="menuitem">
      //         <Link to="/contact/">Contact</Link>
      //       </li>
      //     </ul>
      //   </SiteNavLeft>
      //   <SiteNavRight>
      //     <SocialLinks>
      //       {config.facebook && (
      //         <a
      //           css={SocialLink}
      //           href={config.facebook}
      //           target="_blank"
      //           title="Facebook"
      //           rel="noopener noreferrer"
      //         >
      //           <Facebook />
      //         </a>
      //       )}
      //       {config.twitter && (
      //         <a
      //           css={SocialLink}
      //           href={config.twitter}
      //           title="Twitter"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           <Twitter />
      //         </a>
      //       )}
      //       <a 
      //         css={SocialLink}
      //         href="https://twitch.tv/RyannosaurusRex"
      //         title="Twitch"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         <Twitch />
      //       </a>
      //       <a
      //             css={SocialLink} className="social-link-rss"
      //             href="https://feedly.com/i/subscription/feed/https://ryanhayes.net/rss.xml"
      //             target="_blank"
      //             rel="noopener noreferrer"
      //           >
      //             <svg
      //               xmlns="https://www.w3.org/2000/svg"
      //               viewBox="0 0 24 24"
      //               style={{ height: '1.9rem' }}
      //             >
      //               <circle cx="6.18" cy="17.82" r="2.18" />
      //               <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
      //             </svg>
      //           </a>
      //     </SocialLinks>
      //     {config.showSubscribe && (
      //       <SubscribeButton onClick={this.openModal}>Subscribe</SubscribeButton>
      //     )}
      //     {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
      //   </SiteNavRight>
      // </nav>
    );
  }
}

export default SiteNav;
