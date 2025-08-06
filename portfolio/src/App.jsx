// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { useState, useEffect } from 'react';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <CV/>
  </MantineProvider>;
}





function CV() {
  useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
  }, []);

  return (
   <>
   Hello There!
   </>
  );
}