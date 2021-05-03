import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const DragButton = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  background: white;
  margin-top: -400px;
  margin-left: 500px;
  top: calc(50% -150px / 2);
  left: calc(50% -150px / 2);
  border-radius: 30px;
`;

const DragArea = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: transparent;
  margin-top: -400px;
  margin-left: 500px;
  border-radius: 30px;
  top: calc(50% -150px / 2);
  left: calc(50% -150px / 2);
`;

export default function DragBox() {
  const constrainRef = useRef(null);
  return (
    <>
      <DragArea ref={constrainRef} />
      <DragButton drag dragConstraints={constrainRef} />
    </>
  );
}
