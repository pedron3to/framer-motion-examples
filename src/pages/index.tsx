import { Box, Text, Button } from '@chakra-ui/react';
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useState } from 'react';
import DragBox from '../components/DragBox';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  const list = { opacity: 0 };
  const item = { hidden: { x: -10, opacity: 1 } };
  const teste = useMotionValue(0);
  const opacity1 = useTransform(teste, [-100, 0, 100], [0, 1, 0]);
  const { scrollYProgress } = useViewportScroll();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.path style={{ pathLength: scrollYProgress }}>
      <DragBox key={count} />
      {/* <Box as="main" w="100wh" h="100%" p="100px">
        <Box>
          <Text fontWeight="bold" fontSize={20}>
            Animate
          </Text>
          <Text>x:100</Text>
          <motion.div animate={{ x: 100 }}>
            <Button mt="2">Button</Button>
          </motion.div>
          <Text>scale 0.7</Text>
          <motion.div animate={{ scale: 0.7 }}>
            <Button mt="2">Button</Button>
          </motion.div>
          <Text>scale 0.7 with transition 0.5ms</Text>
          <motion.div animate={{ scale: 0.7 }} transition={{ duration: 0.5 }}>
            <Button mt="2">Button</Button>
          </motion.div>
          <Text>
            scale: [1,2,2,1,1] rotate= 0, 0, 270, 270, 0with transition 3s
          </Text>
          <motion.div
            animate={{
              scale: [1, 1.1, 1.1, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize={20}>
            Animate Server Side Rendering
          </Text>
          <Text>x:100 with property initial=false</Text>
          <motion.div animate={{ x: 100 }} initial={false}>
            <Button mt="2">Button</Button>
          </motion.div>
        </Box>
        <Box mt="4">
          <Text fontWeight="bold" fontSize={20}>
            Gesture
          </Text>
          <Text>Drag X</Text>
          <Text>Drag Constraint left = -100 right= 100</Text>
          <Text>WhileHover</Text>
          <Text>whileTap</Text>

          <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button mt="2">Button</Button>
          </motion.div>
        </Box>
        <Box mt="4">
          <Text fontWeight="bold" fontSize={20}>
            Variants
          </Text>
          <Text>Animate hidden</Text>
          <Text>variants=`list`</Text>
          <motion.ul animate="hidden" variants={list} initial>
            <motion.li variants={item} />
          </motion.ul>
        </Box>
        <Box mt="4">
          <Text fontWeight="bold" fontSize={20}>
            Motion Values using framer hook - useMotionValue()
          </Text>
          <Text>
            const x = useMotionValue(0) <br />
            const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
          </Text>
          <Text>variants=`list`</Text>
          <motion.div drag="x" style={{ teste, opacity1 }}>
            <Button mt="2">Button</Button>
          </motion.div>
        </Box>
        <Box mt="4">
          <Text fontWeight="bold" fontSize={20}>
            const variants
          </Text>

          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Button mt="2">Button</Button>
          </motion.div>
        </Box>
      </Box> */}
    </motion.path>
  );
}
