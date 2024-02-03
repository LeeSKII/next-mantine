import { Container, Box, Skeleton } from "@mantine/core";

export default function Loading() {
  return (
    <Container size={"md"}>
      <Box>
        <Skeleton height={"100px"} width={"100%"} visible></Skeleton>
      </Box>
    </Container>
  );
}
