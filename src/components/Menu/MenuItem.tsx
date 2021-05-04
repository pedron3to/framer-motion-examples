import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MenuItemWrapper = styled(motion.li)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const IconPlaceHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  background: pink;
`;

const TextPlaceHolder = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  color: white;
  background: pink;
  flex: 1;
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MenuItem() {
  return (
    <MenuItemWrapper
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconPlaceHolder />
      <TextPlaceHolder />
    </MenuItemWrapper>
  );
}
