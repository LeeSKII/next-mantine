import { Box, Divider, Text, Paper } from "@mantine/core";

import DoubleNavbar from "@/components/navbars/DoubleNavbar";
import NavbarLinksGroup from "@/components/navbars/NavbarLinksGroup";
import NavbarMinimal from "@/components/navbars/NavbarMinimal";
import NavbarMinimalColored from "@/components/navbars/NavbarMinimalColored";

export default function NavBars() {
  return (
    <>
      <Box>
        <Paper shadow={"md"} radius={"lg"} withBorder>
          <Box p={25}>
            <Text size="md" fw={700}>
              Navbar with 2 sections
            </Text>
          </Box>
          <Divider my={10}></Divider>
          <Box p={5}>
            <DoubleNavbar></DoubleNavbar>
          </Box>
        </Paper>
      </Box>
      <Box>
        <Paper shadow={"md"} radius={"lg"} withBorder>
          <Box p={20}>
            <Text size="md" fw={700}>
              Collapsible links group
            </Text>
          </Box>
          <Divider my={10}></Divider>
          <Box maw={300} px={5}>
            <NavbarLinksGroup></NavbarLinksGroup>
          </Box>
        </Paper>
      </Box>
      <Box>
        <Paper shadow={"md"} radius={"lg"} withBorder>
          <Box p={20}>
            <Text mb={20} size="md" fw={700}>
              Navbar with tooltips
            </Text>
          </Box>
          <Divider></Divider>
          <Box p={5}>
            <NavbarMinimal></NavbarMinimal>
          </Box>
        </Paper>
      </Box>
      <Box>
        <Paper shadow={"md"} radius={"lg"} withBorder>
          <Box p={20}>
            <Text mb={20} size="md" fw={700}>
              Navbar with tooltips
            </Text>
          </Box>
          <Divider></Divider>
          <Box p={5}>
            <NavbarMinimalColored></NavbarMinimalColored>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
