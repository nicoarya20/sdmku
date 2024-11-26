'use client'
import { apies } from '@/lib/routes';
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Anchor, Box, Button, Flex, PinInput, Stack, Text } from '@mantine/core';
import { use, useState } from 'react';

function Page({params} : {params: Promise<{ userid: string }>} ) {
  const userId = use(params).userid
  const [pin, setPin] = useState<string | null>(null)

  

  async function handleSubmit() {
    const data = {
      userId,
      pin
    }

    const res = await fetch(apies["/api/auth/verifikasi"], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const dataText = await res.text()
    console.log(dataText)
    window.location.replace("/application/home")
    
  }

  return (
    <>
      <LayoutLogin>
        <Stack pt={20}>
          <Box p={10}>
            <Stack gap={5} align='center'>
              <Text fw={"bold"} fz={"xs"}>Verifikasi Nomor Telepon</Text>
              <Text fw={"bold"} fz={"xs"}>Masukkan kode verifikasi yang sudah kami kirimkan melalui WhatsApp</Text>
              {userId}
              <PinInput onChange={setPin} mt={60} type="number" size={"lg"} radius={"xl"} />
            </Stack>
            <Box mt={90} px={10}>
              <Button onClick={handleSubmit} fullWidth bg={WARNA.tombolApk} radius={"lg"} >Verifikasi</Button>
            </Box>
            <Flex mt={10} justify={"center"} gap={3}>
              <Text fw={"bold"} fz={"xs"}>Tidak Menerima WhatsApp?</Text>
              <Anchor c={"dark"} variant='transparent'>
                <Text fw={"bold"} c={"dark"} fz={"xs"}>Kirim Lagi</Text>
              </Anchor>
            </Flex>
          </Box>
        </Stack>
      </LayoutLogin>
    </>
  );
}

export default Page;
