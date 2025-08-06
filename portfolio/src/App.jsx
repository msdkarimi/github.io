import '@mantine/core/styles.css';
import { CV } from './components/cv';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
  <MantineProvider defaultColorScheme="dark">
    <CV/>
  </MantineProvider>
  )
}


