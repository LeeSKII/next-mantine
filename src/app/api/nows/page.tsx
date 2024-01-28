import { Title, Text, Container, Box, Stack } from "@mantine/core";

import Link from "next/link";

import { nows } from "./data";


//每次进入都强制刷新页面,不使用缓存策略
export const dynamic = "force-dynamic";

export default function Nows() {
  const selected = Math.random() * nows.length;
  const saying = nows[parseInt(selected.toString())];
  return (
    <>
      <Container>
        <Link href={"/api"}>
          <Title order={2}>Go Back</Title>
        </Link>
        <Stack align="center">
          <Title order={2}>毒鸡汤</Title>
          <Box>
            <Text size="lg">{saying.content}</Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
