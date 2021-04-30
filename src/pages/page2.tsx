import { Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Page2(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <>
      <Box bg="black" h="100vh" w="100%" />
    </>
  );
}
