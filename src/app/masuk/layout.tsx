import { Container } from '@mantine/core';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container h={"100vh"}>
      {children}
    </Container>
  );
}

export default Layout;
