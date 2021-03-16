import React from "react";
import styled from "styled-components";

const Paragraph = styled.a`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 35px;
  &:hover,
  &:active,
  &.active {
    text-decoration: none;
  }
`;

const A = ({ href = "#", ...props }) => {
  return <Paragraph href={href} color="secondary" {...props} />;
};

export default A;
