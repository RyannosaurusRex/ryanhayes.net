// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { SocialLink } from '../../../src/styles/shared';
import config from '../../../src/website-config';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import Twitch from '../icons/twitch';
import SubscribeModal from '../../../src/components/subscribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';

interface SiteNavProps {
    isHome?: boolean;
}

const SiteNav: React.FC<SiteNavProps> = props => {
    //   subscribe = React.createRef<SubscribeModal>();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    //   openModal = () => {
    //     if (this.subscribe.current) {
    //       this.subscribe.current.open();
    //     }
    //   };

    return <>
            {/* This example requires Tailwind CSS v1.4.0+ */}
            <div data-todo-x-data="{ mobileMenuOpen: true }" className="relative bg-white z-10">
                <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-center md:space-x-10">
                    <div className="mr-auto">
                        <Link to="/"><h1 className="text-2xl font-bold">Ryan Hayes</h1></Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <a href="/now" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            /Now
                        </a>
                        <a href="/contact" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Contact
                        </a>
                        <a href="/about" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            About
                        </a>
                        {/* <div data-todo-x-data="{ flyoutMenuOpen: false }" data-todo-at-click-away="flyoutMenuOpen = false" className="relative">
                            <button type="button" data-todo-at-click="flyoutMenuOpen = !flyoutMenuOpen" data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" data-todo-colon-className="{ 'text-gray-900': flyoutMenuOpen, 'text-gray-500': !flyoutMenuOpen }" className="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                <span>More</span>
                                <sv         g data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" data-todo-x-bind-className="{ 'text-gray-600': flyoutMenuOpen, 'text-gray-400': !flyoutMenuOpen }" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div> */}
                    </nav>
                </div>

                <div
                    data-todo-x-description="Mobile menu, show/hide based on mobile menu state."
                    data-todo-x-show="mobileMenuOpen"
                    data-todo-x-transition-enter="duration-200 ease-out"
                    data-todo-x-transition-enter-start="opacity-0 scale-95"
                    data-todo-x-transition-enter-end="opacity-100 scale-100"
                    data-todo-x-transition-leave="duration-100 ease-in"
                    data-todo-x-transition-leave-start="opacity-100 scale-100"
                    data-todo-x-transition-leave-end="opacity-0 scale-95"
                    className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${mobileMenuOpen ? "" : "hidden"}`}>
                    <div className="rounded-lg shadow-lg">
                        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-xl font-bold">RyanHayes.NET</h1>
                                    {/* <div>
                                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                                    </div> */}
                                    <div className="-mr-2">
                                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <nav className="grid grid-cols-1 gap-7">
                                        <a href="/now" className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                            <div className="text-base leading-6 font-medium text-gray-900">
                                                /Now
                                            </div>
                                        </a>
                                        <a href="/contact" className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                            <div className="text-base leading-6 font-medium text-gray-900">
                                                Contact
                                            </div>
                                        </a>
                                        <a href="/about" className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                                            <div className="text-base leading-6 font-medium text-gray-900">
                                                About
                                            </div>
                                        </a>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </>
};






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

export default SiteNav;
