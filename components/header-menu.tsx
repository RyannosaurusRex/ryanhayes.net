import Link from 'next/link'
import * as React from 'react'

const HeaderMenu: React.FC = () => {
    return <div role="menu" className="flex mt-8 mb-20">
        <div className="mr-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
                <Link href="/">
                    <a className="hover:underline">Ryan's Blog</a>
                </Link>
            </h2>
        </div>
        <div className="flex h-auto ml-auto">
            <MenuItem href="/" text="Home"/>
            <MenuItem href="/now" text="Now"/>
            <MenuItem href="/contact" text="Contact"/>
            <MenuItem href="/about" text="About" />
        </div>
    </div>
}

const MenuItem: React.FC<{href: string, text: string}> = props => {
    return <Link href={props.href}><a className="text-2xl md:font-bold ml-3 hover:text-blue-600 hover:underline mt-auto mb-auto">{props.text}</a></Link>

}

export default HeaderMenu