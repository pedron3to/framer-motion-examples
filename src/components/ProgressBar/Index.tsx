import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SVG = styled.svg`
  top: 20px;
  left: 20px;
  width: 120px;
  height: 120px;
`;

export default function ProgressBar() {
  return (
    <SVG className="progress-icon" viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="white"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          // pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1, // Reverse direction of line animation
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="white"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
      />
    </SVG>
  );
}
