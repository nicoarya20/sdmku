'use client'
import { apies, pages } from '@/lib/routes';
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutLogback from '@/module/_global/layout/layout_logback';
import { Box, Button, Stack, TextInput } from '@mantine/core';
import { Prisma } from '@prisma/client';
import { useState } from 'react';

type FormUser = Prisma.UserGetPayload<{
  select: {
    name: true,
    email: true,
    password: true,
    phone: true
  }
}>

const defaultForm: FormUser = {
  name: "",
  email: "",
  password: "",
  phone: ""
}
  
function ViewRegistrasi() {
  const [formState, setFormState] = useState<FormUser>(defaultForm)
  const [loading, setLoading] = useState(false)

  async function OnRegister () {
    if (formState.name === "" || formState.email === "" || formState.password === "" || formState.phone === "") 
      return alert("form belum diisi semua")
    try {
      setLoading(true)
      const res = await fetch(apies["/api/auth/registrasi"], {
        method: 'POST',
        body: JSON.stringify(formState)
      })
      const dataText = await res.text()
      if (!res.ok) return alert("Something went wrong" + dataText)
      window.location.replace(pages["/"])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <LayoutLogback>
        <Stack pt={20}>
          <Box p={20}>
            <TextInput
              label="Nama"
              type='text'
              placeholder="Masukkan Nama"
              size='md'
              radius={"xl"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
            <TextInput mt={10}
              label="Email"
              type='email'
              placeholder="Masukkan Email"
              size='md'
              radius={"xl"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
             <TextInput mt={10}
              label="Telepon"
              type='tel'
              placeholder="Masukkan Nomor Telepon"
              size='md'
              radius={"xl"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            />
            <TextInput mt={10}
              label="Password"
              type='password'
              placeholder="Masukkan Password"
              size='md'
              radius={"xl"}
              styles={{ input: { borderColor: WARNA.tombolApk } }}
              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />
          </Box>
          <Box
            px={20}>
            <Button loading={loading} onClick={OnRegister} fullWidth bg={WARNA.tombolApk} radius={"lg"} >Registrasi</Button>
          </Box>
        </Stack>
      </LayoutLogback>
    </>
  );
}

export default ViewRegistrasi;
