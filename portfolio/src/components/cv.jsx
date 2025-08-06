import { useState, useEffect } from 'react';
import { UserInfoIcons } from './user';
import { Container } from '@mantine/core';

export function CV() {
  useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
  }, []);

  return (
   <Container>
    <UserInfoIcons/>
   </Container>
  );
}