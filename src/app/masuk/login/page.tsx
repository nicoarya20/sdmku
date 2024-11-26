'use client'
import { apies, pages } from '@/lib/routes';
import { Button, Center, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'


function Page() {
  const [phone, setPhone] = useState<string | null>("89647037426")
  const [loading, setloading] = useState(false)
  const route = useRouter()

  async function login() {
    try {
      setloading(true)
      if (!phone) return alert('phone is required')
      const res = await fetch(apies["/masuk/api/login"], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone })
      })
      const { data } = await res.json()

      if (!res.ok) return alert(data.message)
      route.replace(pages["/masuk/verifikasi/[userid]"]({ userid: data.userId }))
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }
  return (
    <Center>
      <Stack>

        <Text>Loggin</Text>
        <TextInput value={phone!} onChange={(e) => setPhone(e.target.value)} placeholder='896973388xxx' leftSection={"🇮🇩"} />
        <Button loading={loading} onClick={login}>Login</Button>
      </Stack>
    </Center>
  );
}

export default Page;
