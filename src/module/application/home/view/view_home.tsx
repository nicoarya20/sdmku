import LayoutBackground from "@/module/_global/layout/layout_background";
import HeaderHome from "../ui/header_home";
import { Box, Text } from "@mantine/core";

function ViewHome() {
  return (
    <>
      <LayoutBackground>
        <HeaderHome />
        <Box p={20}>
          <Text fz={24} fw="bold">Selamat Datang</Text>
        </Box>
      </LayoutBackground>
    </>
  );
}

export default ViewHome;
