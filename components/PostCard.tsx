import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import { Category } from '../lib/wpApi';
import Pill from './Pill';
// import { colors } from '../styles/colors';
// import { PageContext } from '../templates/post';


const PostCard: React.FC<{
    title: string,
    image: string,
    slug: string,
    excerpt: string,
    draft: boolean,
    date: string,
    categories: Category[]
}> = (props) => {
    return (<>
        { !props.draft &&
            <div className="flex flex-col rounded-lg shadow-lg shadow overflow-hidden m-5">
                <div className="flex-shrink-0">
                    {props.image &&
                        <img src={props.image}/>
                    }
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <div className="text-sm leading-5 font-medium text-indigo-600">
                            {props.categories && props.categories.slice(1,2).map((cat) => {
                                return <a key={props.slug + cat} href="#" className="hover:underline mr-3">
                                    {cat.node.name}
                                </a>
                            })}
                        </div>
                        
                        
                        <a href={props.slug}>
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                {props.title}
                            </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500" dangerouslySetInnerHTML={{__html: props.excerpt}}>
                            </p>
                            {props.date && <p className="text-gray-500 mt-3">{props.date}</p>}
                        </a>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default PostCard;
