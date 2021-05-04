import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import DragBox from '../components/DragBox';
import ProgressBar from '../components/ProgressBar/index';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <DragBox key={count} />
      <ProgressBar />
      <Box mt={500}>Text</Box>
    </Box>
  );
}
