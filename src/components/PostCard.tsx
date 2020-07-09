import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import * as React from 'react';

import { colors } from '../styles/colors';
import { PageContext } from '../templates/post';


export interface PostCardProps {
    post: PageContext;
}

const PostCard: React.FC<PostCardProps> = ( props ) => {
    return (
        <div className="flex flex-col rounded-lg shadow-lg shadow overflow-hidden">
            <div className="flex-shrink-0">
                <Img
                    alt={`${props.post.frontmatter.title} cover image`}
                    className="h-48 w-full object-cover"
                    fluid={props.post.frontmatter.image.childImageSharp.fluid}
                />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-indigo-600">
                        <a href="#" className="hover:underline">
                            Blog
                        </a>
                    </p>
                    <Link to={props.post.fields.slug} className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {props.post.frontmatter.title}
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            {props.post.excerpt}
                        </p>
                    </Link>
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
