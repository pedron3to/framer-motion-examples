import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

const ButtonMenu = styled.div`
  position: fixed;
  border: none;
  cursor: pointer;
  background: transparent;
  width: 30px;
  height: 30px;
  top: 30px;
  left: 29px;
  border-radius: 50%;
`;

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#333"
    strokeLinecap="round"
    {...props}
  />
);

interface ButtonProps {
  toggle: MouseEventHandler;
}

export default function MenuToggle({ toggle }: ButtonProps) {
  return (
    <ButtonMenu onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </ButtonMenu>
  );
}
