import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const Ul = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
  margin-top: 0;
`;

const variant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Navigation() {
  return (
    <Ul variants={variant}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </Ul>
  );
}
