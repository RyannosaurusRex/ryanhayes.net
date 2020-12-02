import * as React from 'react'
import ConvertKitForm from 'convertkit-react'

import { Link } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image'

const NewsletterWidget: React.FC<{}> = (props) => {

    return (
      <ConvertKitForm className="mx-auto" formId={1856231} template="mills" nameLabel="First Name" />
    );
};

export default NewsletterWidget;
