'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Anchor, Box, Button, Flex, PinInput, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

function ViewVerifikasi() {
  const router = useRouter();
  return (
    <>
      <LayoutLogin>
        <Stack pt={20}>
          <Box p={10}>
            <Stack gap={5} align='center'>
              <Text fw={"bold"} fz={"xs"}>Verifikasi Nomor Telepon</Text>
              <Text fw={"bold"} fz={"xs"}>Masukkan kode verifikasi yang sudah kami kirimkan melalui WhatsApp</Text>
              <PinInput mt={60} type="number" size={"lg"} radius={"xl"} />
            </Stack>
            <Box mt={90} px={10}>
              <Button fullWidth bg={WARNA.tombolApk} radius={"lg"} >Verifikasi</Button>
            </Box>
            <Flex mt={10} justify={"center"} gap={3}>
              <Text fw={"bold"} fz={"xs"}>Tidak Menerima WhatsApp?</Text>
              <Anchor onClick={() => router.push("/verifikasi")}  c={"dark"} variant='transparent'>
                <Text fw={"bold"} c={"dark"} fz={"xs"}>Kirim Lagi</Text>
              </Anchor>
            </Flex>
          </Box>
        </Stack>
      </LayoutLogin>
    </>
  );
}

export default ViewVerifikasi;
