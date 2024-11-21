import { Box, Container, rem, Stack } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutBackground({ children } : { children: React.ReactNode }) {
  return (
    <>
      <Stack>
        <Box bg={"dark"} w={"100%"} h={"100%"} pos={"fixed"} style={{ overflowY: "auto"}}>
          <Container mih={"100vh"} size={rem(550)} p={0} bg={WARNA.bgApk}>
            {children}
          </Container>
        </Box>
      </Stack>
    </>
  );
}

export default LayoutBackground;
