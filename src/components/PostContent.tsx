import { lighten, setLightness, darken, setSaturation } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import RehypeReact from 'rehype-react';

import { colors } from '../styles/colors';
import PageFullContent from './PageFullContent';

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
}

const PostContent: React.FC<PostContentProps> = ({ htmlAst }) => {
  return (
    <PageFullContent>
      <div className="prose xl:prose-xl mx-auto">
        {/* TODO: this will apply the class when rehype-react is published https://github.com/rhysd/rehype-react/pull/11 */}
        <Ast className="mx-auto" ast={htmlAst} />
      </div>
    </PageFullContent>
  );
};

export default PostContent; 
