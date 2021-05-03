import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Menu from '../Menu';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Box>{children}</Box>;
}
