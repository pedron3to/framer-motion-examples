import React from "react";
import styled from "styled-components";


const BadgeSolid = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.41px;
  border-radius: 5px;
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

`;

const Badge = ({ color = "light", bg = "primary", ...rest }) => {
  return (
    <BadgeSolid
      color={color}
      border={`1px solid`}
      borderColor={bg}
      bg={bg}
      {...rest}
    />
  );
};

export default Badge;
