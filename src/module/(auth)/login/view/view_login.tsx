'use client'
import { WARNA } from "@/module/_global/fun/WARNA";
import LayoutLogin from "@/module/_global/layout/layout_login";
import { Anchor, Box, Button, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";


function ViewLogin() {
  const router = useRouter();
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
            />
            <Text mt={10} ta={"center"} c={"dark"} fz={10} fw={"bold"}>Kami akan mengirimkan kode verifikasi melalui WhatsApp untuk mengonfirmasi nomor Anda</Text>
          </Box>
          <Box px={10}>
            <Button onClick={() => router.push("/verifikasi")} fullWidth bg={WARNA.tombolApk} radius={"lg"} >Login</Button>
          </Box>
          <Flex justify={"center"} gap={3}>
              <Text mt={8} ta={"center"} c={"dark"} fz={10} fw={"bold"}>Tidak Punya Akun?</Text>
              <Anchor c={"dark"} variant="transparent" onClick={() => router.push("/registrasi")}>
                <Text mt={8} c={"dark"} fw={"bold"} fz={10} variant="transparent">Registrasi</Text>
              </Anchor>
            </Flex>
        </Stack>
      </LayoutLogin >
    </>
  );
}

export default ViewLogin;
