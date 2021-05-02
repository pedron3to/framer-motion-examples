import styled from '@emotion/styled';
import MenuItem from './MenuItem';
import { motion } from 'framer-motion'

const Ul = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

const variant= {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
 }



export default function Navigation() {
  return (
    <Ul variants={variant} >
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </Ul>
  );
}
