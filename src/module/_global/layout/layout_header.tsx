import { Box, rem } from '@mantine/core';
import React from 'react';
import { WARNA } from '../fun/WARNA';

function LayoutHeader({children} : {children: React.ReactNode}) {
  return (
    <Box pos={"sticky"} m={0} h={rem(80)} bg={WARNA.tombolApk} w={"100%"}
      style={{
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    }}>
      {children}
    </Box>
  );
}

export default LayoutHeader;
