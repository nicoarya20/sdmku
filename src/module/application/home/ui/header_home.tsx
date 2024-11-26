'use client'
import { WARNA } from '@/module/_global/fun/WARNA';
import LayoutHeader from '@/module/_global/layout/layout_header';
import { ActionIcon, Box, Flex, Group, Image, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa6';

function HeaderHome() {
  const router = useRouter();
  return (
    <>
      <LayoutHeader>
        <Box px={20}>
          <Flex pt={20} justify={"space-between"} align={"center"}>
            <Group gap={5}>
              <Image src={"/assets/image/logo.png"} w={40} alt='' />
              <Text fw={"bold"} c={WARNA.bgApk}>Darmasaba</Text>
            </Group>
            <Group>
              <ActionIcon radius={"md"} color={WARNA.bgApk} >
                <FaBell size={20} color={WARNA.tombolApk} />
              </ActionIcon>
              <ActionIcon onClick={() => router.push("/auth/logout")} radius={"md"} color={WARNA.bgApk}>
                <FaUser size={20} color={WARNA.tombolApk} />
              </ActionIcon>
            </Group>
          </Flex>
        </Box>
      </LayoutHeader>


    </>
  );
}

export default HeaderHome;
