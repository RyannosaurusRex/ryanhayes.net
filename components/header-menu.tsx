import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react';
import Container from './container'

const HeaderMenu: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return <Container><>
    {/* This example requires Tailwind CSS v1.4.0+ */}
    <div data-todo-x-data="{ mobileMenuOpen: true }" className="relative bg-white z-10">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-center md:space-x-10">
            <div className="mr-auto">
                <a href="/"><h1 className="text-2xl font-bold transition-colors hover:text-blue-700">Ryan Hayes</h1></a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <nav className="hidden md:flex space-x-10">
            <MenuItem href="/" text="Home"/>
            <MenuItem href="/now" text="Now"/>
            <MenuItem href="/contact" text="Contact"/>
            <MenuItem href="/about" text="About" />
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
                                <MenuItem href="/now" text="Now"/>
                                <MenuItem href="/contact" text="Contact"/>
                                <MenuItem href="/about" text="About" />
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</>

        {/* <div role="menu" className="flex mt-8 mb-20">
        <div className="mr-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
                <Link href="/">
                    <a className="hover:underline">Ryan Hayes</a>
                </Link>
            </h2>
        </div>
        <div className="flex h-auto ml-auto">
            <MenuItem href="/" text="Home"/>
            <MenuItem href="/now" text="Now"/>
            <MenuItem href="/contact" text="Contact"/>
            <MenuItem href="/about" text="About" />
        </div>
    </div> */}
    </Container>
}

const MenuItem: React.FC<{href: string, text: string}> = props => {
    return <Link href={props.href}><a className="text-2xl md:font-bold ml-3 hover:text-blue-600 hover:underline mt-auto mb-auto">{props.text}</a></Link>
}

export default HeaderMenu