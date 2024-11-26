'use client';
import { apies, pages } from '@/lib/routes';
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutBackground from '@/module/_global/layout/layout_background';
import HeaderHome from '@/module/application/home/ui/header_home';
import { Box, Button, Flex } from '@mantine/core';
import React, { useState } from 'react';

function Logout() {
  const [loading, setLoading] = useState(false);
  async function onLogout() {
    try {
      setLoading(true);
      const response = await fetch(apies['/api/auth/logout'], {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Logout berhasil');
        window.location.href = pages['/']; 
      } else {
        const data = await response.json();
        console.error('Logout gagal:', data.message);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    } finally {
      setLoading(false);
    }
  }


return (
  <>
    <LayoutBackground>
      <HeaderHome />
      <Flex h={"80vh"} justify={"center"} align={"center"}>
        <Box p={20}>
          <Button loading={loading} onClick={onLogout} radius={"lg"} color={WARNA.tombolApk}>LogOut</Button>
        </Box>
      </Flex>
    </LayoutBackground>
  </>
);
}

export default Logout;
