import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
// import { colors } from '../styles/colors';
// import { PageContext } from '../templates/post';


const PostCard: React.FC<{
    title: string,
    image: string,
    slug: string,
    excerpt: string,
    draft: boolean,
    date: string
}> = (props) => {
    return (<>
        { !props.draft && <a href={props.slug}>
            <div className="flex flex-col rounded-lg shadow-lg shadow overflow-hidden m-5">
                <div className="flex-shrink-0">
                    {props.image &&
                        <img src={"/" + props.image}/>
                    }
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                            {/* <a href="#" className="hover:underline">
                                Blog
                            </a> */}
                        </p>

                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {props.title}
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            {props.excerpt}
                        </p>
                        {props.date && <p className="text-gray-500 mt-3">{props.date}</p>}
                    </div>
                </div>
            </div>
        </a>}
        </>
    );
};

export default PostCard;
