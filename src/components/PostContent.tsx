import { lighten, setLightness, darken, setSaturation } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import RehypeReact from 'rehype-react';

import { colors } from '../styles/colors';
import PageFullContent from './PageFullContent';
import { DiscussionEmbed } from 'disqus-react';
import config from './../website-config'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  // components: { 'interactive-counter': Counter },
  components: {},
}).Compiler;

const Ast = ({ ast, ...props }: any) => {
  ast.properties = props;
  return renderAst(ast);
};

export interface PostContentProps {
  htmlAst: any;
  disqusConfig: string;
}
const PostContent: React.FC<PostContentProps> = props => {
  return (
    <PageFullContent>
      <div className="prose xl:prose-xl mx-auto">
        <Ast className="mx-auto" ast={props.htmlAst} />
        <DiscussionEmbed shortname={"ryanhayesblog"} config={props.disqusConfig.id} />
      </div>
    </PageFullContent>
  );
};

export default PostContent; 
