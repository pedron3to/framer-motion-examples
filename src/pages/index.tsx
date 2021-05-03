import { Box, Text, Button, Stack } from '@chakra-ui/react';
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useState } from 'react';
import DragBox from '../components/DragBox';
import Menu from '../components/Menu';
import ProgressBar from '../components/ProgressBar/Index';

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
    <Box>
      <DragBox key={count} />
      <ProgressBar/>
      
      <Stack spacing={2} mt={500} maxW={1200} align="left" mx="auto" px="8">
        <Text>
          {' '}
          1 Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Why do we use it? It is a long established
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed
          to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like).
        </Text>
        <Text>
          {' '}
          2 Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Iaisdhiaushdiaushdiuhted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
        <Text>
          {' '}
          3Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leuyguyguyguygf letters, as opposed to using 'Content
          here, content here', making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
        <Text>
          {' '}
          4Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leuyguyguyguygf letters, as opposed to using 'Content
          here, content here', making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
        <Text>
          {' '}
          5Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leuyguyguyguygf letters, as opposed to using 'Content
          here, content here', making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
      </Stack>
      <Stack spacing={2} mt={500} maxW={1200} align="left" mx="auto" px="8">
        <Text>
          {' '}
          1 Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Why do we use it? It is a long established
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed
          to using Content here, content here, making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for lorem ipsum
          will uncover many web sites still in their infancy. Various versions
          have evolved over the years, sometimes by accident, sometimes on
          purpose (injected humour and the like).
        </Text>
        <Text>
          {' '}
          2 Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Iaisdhiaushdiaushdiuhted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here, making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for lorem ipsum will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Text>
        <Text>
          {' '}
          3Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leuyguyguyguygf letters, as opposed to using Content
          here, content here, making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for will uncover many web sites still
          in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </Text>
        <Text>
          {' '}
          4Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leuyguyguyguygf letters, as opposed to using Content here,
          content here, making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for lorem ipsum will uncover many web
          sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour
          and the like).
        </Text>
        <Text>
          {' '}
          5Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leuyguyguyguygf letters, as opposed to using Content
          here, content here, making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for lorem ipsum will uncover many web
          sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour
          and the like).
        </Text>
      </Stack>
    </Box>
  );
}
