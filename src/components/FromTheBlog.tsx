import * as React from 'react'
import { PageContext } from '../templates/post';
import PostCard from '../components/PostCard';

export interface FromTheBlogProps {
    pages: {
        node: PageContext;
    }[];
}

const FromTheBlog: React.FC<FromTheBlogProps> = ({pages}) => {

    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                    From the blog
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                    Sign up to my email list for updates to your inbox!
                </p>
                </div>
                <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                {pages.map(post => {
                    // filter out drafts in production
                    return (
                    (post.node.frontmatter.draft !== true ||
                        process.env.NODE_ENV !== 'production') && (
                        <PostCard key={post.node.fields.slug} post={post.node} />
                    )
                    );
                })}
                </div>
            </div>
            </div>
    );
};

export default FromTheBlog;