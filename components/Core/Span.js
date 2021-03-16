import React from "react";
import styled from "styled-components";

const SpanStyled = styled.span`
 
 
`;

const Span = ({ ...props }) => {
  return <SpanStyled {...props} />;
};

export default Span;
