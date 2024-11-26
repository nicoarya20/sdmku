'use client'
import { ActionIcon, Box, Image, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { WARNA } from '../fun/WARNA';
import LayoutBackground from './layout_background';
function LayoutLogback({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <LayoutBackground>
        <Box p={20}>
          <ActionIcon variant='transparent' onClick={() => router.push('/')}>
            <FaArrowLeft size={20} color={WARNA.tombolApk} />
          </ActionIcon>
        </Box>
        <Stack align='center' >
          <Image src={"/assets/image/logo.png"} w={102} alt='' />
          <Text fw={"bold"} c={"dark"}>Sistem Darmasaba Mandiri</Text>

        </Stack>
        {children}
      </LayoutBackground>
    </>
  );
}
export default LayoutLogback;
