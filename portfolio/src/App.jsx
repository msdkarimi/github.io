// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { useState, useEffect } from 'react';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <Demo/>
  </MantineProvider>;
}





function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
   <>
   Hello There!
   </>
  );
}