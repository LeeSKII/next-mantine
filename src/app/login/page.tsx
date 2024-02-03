"use client";
import { useState } from "react";
import {
  Container,
  Center,
  Box,
  Paper,
  Input,
  Button,
  PasswordInput,
  Stack,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Page() {
  const [value, setValue] = useState("");
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Container size={"md"}>
        <Center h={"80vh"}>
          {" "}
          <Box maw={"50vw"} miw={"25vw"}>
            <Paper>
              <Stack>
                <Input.Wrapper label="User Name:">
                  <Input placeholder="Input inside Input.Wrapper" />
                </Input.Wrapper>
                <PasswordInput
                  label="Password:"
                  visible={visible}
                  onVisibilityChange={toggle}
                />
                <Center>
                  {" "}
                  <Button size="sm">Sign In</Button>
                  <Space w={"md"}></Space>
                  <Button size="sm">Sign Up</Button>
                </Center>
              </Stack>
            </Paper>
          </Box>
        </Center>
      </Container>
    </>
  );
}
