import React from 'react';
import LayoutBackground from './layout_background';
import { Image, rem, Stack, Text } from '@mantine/core';

function LayoutLogin({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutBackground>
        <Stack pt={rem(50)} align='center'>
          <Image src={"/assets/image/logo.png"} w={102} alt='' />
          <Text fw={"bold"} c={"dark"}>Sistem Darmasaba Mandiri</Text>
        </Stack>
      {children}
      </LayoutBackground>
    </>
  );
}

export default LayoutLogin;
