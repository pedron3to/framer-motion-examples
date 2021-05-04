import styled from '@emotion/styled';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const SVG = styled.svg`
  position: fixed;
  top: 80px;
  left: 8px;
  width: 80px;
  height: 80px;
`;

export default function ProgressBar() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  return (
    <SVG viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="3"
        stroke="white"
        strokeDasharray="0 1"
        d="M 5, 25 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,

          scaleX: -1, // Reverse direction of line animation
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="3"
        stroke="white"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </SVG>
  );
}
