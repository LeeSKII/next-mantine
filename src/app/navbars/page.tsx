import {
  Container,
  Title,
  Text,
  Box,
  Stack,
  Divider,
  Center,
  Paper,
} from "@mantine/core";

import Link from "next/link";

import NavBars from "@/components/navbars/NavBars";

export default function NavBarsPage() {
  return (
    <>
      <Container>
        <Paper
          my={50}
          p={20}
          shadow="xs"
          radius={"lg"}
          style={{
            position: "sticky",
            top: -1,
            zIndex: 50,
          }}
        >
          <Link
            href={"/#main"}
            style={{ textDecorationLine: "none", color: "WindowText" }}
          >
            <Title order={2}>Go Back</Title>
          </Link>
        </Paper>
        <Stack gap={20}>
          <NavBars></NavBars>
        </Stack>
      </Container>
    </>
  );
}
