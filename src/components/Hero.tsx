import * as React from 'react'
import { Link } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image'

export interface HeroProps {
    imageSrc: string
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
    return (

        <div className=" mb-10 mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-10">
            <div className="text-center">
            <img className="inline-block h-28 w-28 rounded-full" src={props.imageSrc} />

            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    Hi! I'm Ryan Hayes.
            <br className="xl:hidden" />
                </h2>
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    Let's build software teams together.
            <br className="xl:hidden" />
                </h2>

                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Something somethings
          </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                            Get started
              </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                            Live demo
              </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;