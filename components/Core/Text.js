import React from 'react';
import styled from 'styled-components';


const Paragraph = styled.p`
  margin-bottom: 0;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 38px;

`;

const ParagraphSmall = styled(Paragraph)`
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: 28px;
 
`;

const Text = ({ variant, ...props }) => {
  let TextRender;

  switch (variant) {
    case 'small':
      TextRender = ParagraphSmall;
      break;
    default:
      TextRender = Paragraph;
  }

  return <TextRender color="text" {...props} />;
};

export default Text;
