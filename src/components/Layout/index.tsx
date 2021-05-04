import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Menu from '../Menu';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Menu />
      {children}
    </Box>
  );
}
