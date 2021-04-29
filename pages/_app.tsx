import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.asPath}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
}
