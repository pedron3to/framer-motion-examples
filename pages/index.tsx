import { Box } from '@chakra-ui/react';
import Head from 'next/document';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Title | Início</title>
      </Head>
      <Box as="main" bg="blue.100" w="100wh" h="100vh">
        <h1>PAGE 3</h1>
      </Box>
    </>
  );
}
