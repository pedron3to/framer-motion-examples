import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ButtonMenu = styled.div`
  cursor: pointer;
  background: green;
  width: 50px;
  height: 50px;
  top: 18px;
  left: 15px;
  border-radius: 50%;
  position: absolute;
`;

const Path = props => (
  <motion.path
    ffill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

export default function MenuToggle() {
  return (
    <ButtonMenu>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path d="M 2 2.5 L 20 2.5" />
        <Path d="M 2 9.423 L 20 9.423" />
        <Path d="M 2 16.346 L 20 16.346" />
      </svg>
    </ButtonMenu>
  );
}
