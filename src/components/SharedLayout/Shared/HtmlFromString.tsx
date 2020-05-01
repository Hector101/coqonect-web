import React, { FunctionComponent } from 'react';

type Props = {
  htmlString: string;
};

const HtmlFromString: FunctionComponent<Props> = ({ htmlString }) => {
return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }}/>
 );
};

export default HtmlFromString;
