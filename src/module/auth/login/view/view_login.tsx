'use client'
import { apies, pages } from "@/lib/routes";
import { WARNA } from "@/module/_global/fun/WARNA";
import LayoutLogin from "@/module/_global/layout/layout_login";
import { Anchor, Box, Button, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";


function ViewLogin() {
  const [phone, setPhone] = useState<string | null>("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  async function onLogin() {
    try {
      setLoading(true)
      if (!phone) return alert('phone is required')
      const res = await fetch(apies["/api/auth/login"], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone })
      })
      const data = await res.json()

      if (!res.ok) return alert(data.message)
      router.replace(pages["/auth/verifikasi"])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <LayoutLogin>
        <Stack pt={20} gap={10} >
          <Box p={10}>
            <TextInput
              leftSection={<Text>+62</Text>}
              placeholder="xxx xxx xxx xxx"
              type="number"
              radius={"xl"}
              size={"md"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Text mt={10} ta={"center"} c={"dark"} fz={10} fw={"bold"}>Kami akan mengirimkan kode verifikasi melalui WhatsApp untuk mengonfirmasi nomor Anda</Text>
          </Box>
          <Box px={10}>
            <Button loading={loading} onClick={onLogin} fullWidth bg={WARNA.tombolApk} radius={"lg"} >Login</Button>
          </Box>
          <Flex justify={"center"} gap={3}>
            <Text mt={8} ta={"center"} c={"dark"} fz={10} fw={"bold"}>Tidak Punya Akun?</Text>
            <Anchor c={"dark"} variant="transparent" onClick={() => router.push("/auth/registrasi")}>
              <Text mt={8} c={"dark"} fw={"bold"} fz={10} variant="transparent">Registrasi</Text>
            </Anchor>
          </Flex>
        </Stack>
      </LayoutLogin >
    </>
  );
}

export default ViewLogin;
