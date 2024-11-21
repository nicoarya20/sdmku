'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Box, Button, Stack, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

function ViewRegistrasi() {
  const router = useRouter();
  return (
    <>
      <LayoutLogin>
        <Stack pt={20}>
          <Box p={20}>
            <TextInput
              label="Nama"
              type='text'
              placeholder="Masukkan Nama"
              size='md'
              radius={"xl"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
            />
            <TextInput mt={10}
              label="Email"
              type='email'
              placeholder="Masukkan Email"
              size='md'
              radius={"xl"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
            />
            <TextInput mt={10}
              label="Password"
              type='password'
              placeholder="Masukkan Password"
              size='md'
              radius={"xl"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
            />
          </Box>
          <Box
            px={20}>
            <Button onClick={() => router.push("/")} fullWidth bg={WARNA.tombolApk} radius={"lg"} >Registrasi</Button>
          </Box>
        </Stack>
      </LayoutLogin>
    </>
  );
}

export default ViewRegistrasi;
