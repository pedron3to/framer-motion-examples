import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.asPath}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
}
