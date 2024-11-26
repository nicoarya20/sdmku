'use client'
import { apies } from '@/lib/routes';
import { Button, PinInput, Stack } from '@mantine/core';
import React, { use, useState } from 'react';

function Page({ params }: { params: Promise<{ userid: string }> }) {
  const userId = use(params).userid
  const [pin, setPin] = useState<string | null>(null)

  async function handleSubmit() {
    const data = {
      userId,
      pin
    }

    const res = await fetch(apies["/masuk/api/ver"], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const dataText = await res.text()
    console.log(dataText)
    window.location.replace("/")
  }
  return (
    <Stack>
      {userId}
      <PinInput onChange={setPin} mt={60} type="number" size={"lg"} radius={"xl"} />
      <Button onClick={handleSubmit} radius={"lg"} >Verifikasi</Button>
    </Stack>
  );
}

export default Page;
