import { Container, Title, Text, Box, Stack, Divider } from "@mantine/core";

import Link from "next/link";

import DoubleNavbar from "@/components/navbars/DoubleNavbar";
import NavbarLinksGroup from "@/components/navbars/NavbarLinksGroup";

export default function NavBars() {
  return (
    <>
      <Container>
        <Box my={50}>
          <Link href={"/#main"}>
            <Title order={2}>Go Back</Title>
          </Link>
        </Box>
        <Stack gap={20}>
          <Box>
            <Text mb={20} size="md" fw={700}>
              Navbar with 2 sections
            </Text>
            <DoubleNavbar></DoubleNavbar>
            <Divider mt={20}></Divider>
          </Box>
          <Box maw={300}>
            <Text mb={20} size="md" fw={700}>
              Collapsible links group
            </Text>
            <NavbarLinksGroup></NavbarLinksGroup>
            <Divider></Divider>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
