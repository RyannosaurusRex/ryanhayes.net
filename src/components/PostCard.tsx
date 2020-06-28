import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import * as React from 'react';

import { colors } from '../styles/colors';
import { PageContext } from '../templates/post';


export interface PostCardProps {
  post: PageContext;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                    <Img
                 alt={`${post.frontmatter.title} cover image`}
                 className="h-48 w-full object-cover"
                 fluid={post.frontmatter.image.childImageSharp.fluid}
               />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                        <a href="#" className="hover:underline">
                            Blog
                        </a>
                        </p>
                        <a href="#" className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            Boost your conversion rate
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                        </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                        <a href="#">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </a>
                        </div>
                        <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                            Roel Aufderhar
                            </a>
                        </p>
                        <div className="flex text-sm leading-5 text-gray-500">
                            <time dateTime="2020-03-16">
                            Mar 16, 2020
                            </time>
                            <span className="mx-1">
                            &middot;
                            </span>
                            <span>
                            6 min read
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    // <article
    //   className={`post-card ${post.frontmatter.image ? '' : 'no-image'}`}
    //   css={PostCardStyles}
    // >
    //   {post.frontmatter.image && (
    //     <Link className="post-card-image-link" css={PostCardImageLink} to={post.fields.slug}>
    //       <PostCardImage className="post-card-image">
    //         {post.frontmatter.image &&
    //           post.frontmatter.image.childImageSharp &&
    //           post.frontmatter.image.childImageSharp.fluid && (
    //           <Img
    //             alt={`${post.frontmatter.title} cover image`}
    //             style={{ height: '100%' }}
    //             fluid={post.frontmatter.image.childImageSharp.fluid}
    //           />
    //         )}
    //       </PostCardImage>
    //     </Link>
    //   )}
    //   <PostCardContent className="post-card-content">
    //     <Link className="post-card-content-link" css={PostCardContentLink} to={post.fields.slug}>
    //       <header className="post-card-header">
    //         {post.frontmatter.tags && <PostCardTags>{post.frontmatter.tags[0]}</PostCardTags>}
    //         <PostCardTitle>{post.frontmatter.title}</PostCardTitle>
    //       </header>
    //       <PostCardExcerpt>
    //         <p>{post.excerpt}</p>
    //       </PostCardExcerpt>
    //     </Link>
    //     <PostCardMeta className="post-card-meta">
    //       <AuthorList>
    //         <AuthorListItem>
    //           <AuthorNameTooltip className="author-name-tooltip">
    //             {post.frontmatter.author.id}
    //           </AuthorNameTooltip>
    //           <Link css={StaticAvatar} to={`/author/${_.kebabCase(post.frontmatter.author.id)}/`}>
    //             <AuthorProfileImage
    //               src={post.frontmatter.author.avatar.children[0].fixed.src}
    //               alt={post.frontmatter.author.id}
    //             />
    //           </Link>
    //         </AuthorListItem>
    //       </AuthorList>
    //       <ReadingTime>{post.timeToRead} min read</ReadingTime>
    //     </PostCardMeta>
    //   </PostCardContent>
    // </article>
  );
};

export default PostCard;
