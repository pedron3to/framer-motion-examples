import styled from '@emotion/styled';
import { useRef, useEffect } from 'react';
import { useCycle, motion } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const NavWrapper = styled(motion.nav)`
  position: absolute;
  margin-top: 0px;
  top: -500px;
  left: 0;
  bottom: 0;
  width: 300px;
`;

const SideBar = styled(motion.div)`
  position: absolute;
  margin-top: 0;
  top: 0px;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export default function Menu() {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <NavWrapper
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <SideBar variants={sidebar} />
      <Navigation />
      <MenuToggle isOpen={() => setIsOpen()} />
    </NavWrapper>
  );
}
