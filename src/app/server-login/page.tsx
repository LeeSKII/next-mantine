import {
  Container,
  Center,
  Box,
  Paper,
  Input,
  InputWrapper,
  Button,
  PasswordInput,
  Stack,
  Space,
} from "@mantine/core";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  async function handleLogin(formData: FormData) {
    "use server";
    const userName = formData.get("userName");
    const password = formData.get("password");
    console.log(userName, password);
    if (userName == "admin" && password == "123") {
      cookies().set("user", "admin", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // One week
        path: "/",
      });

      /*基于cookie的session加密
      // const encryptedSessionData = encrypt(sessionData); // Encrypt your session data
      // cookies().set("session", encryptedSessionData, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "production",
      //   maxAge: 60 * 60 * 24 * 7, // One week
      //   path: "/",
      // });
      // Redirect or handle the response after setting the cookie

      //访问存储在服务器中的session数据
      import { cookies } from 'next/headers'
 
      export async function getSessionData(req) {
        const encryptedSessionData = cookies().get('session')?.value
        return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
      }
      */

      redirect("/api");
    }
  }

  return (
    <>
      <Container size={"md"}>
        <Center h={"80vh"}>
          {" "}
          <form action={handleLogin}>
            <Box maw={"50vw"} miw={"25vw"}>
              <Paper>
                <Stack>
                  <InputWrapper label="User Name:">
                    <Input name="userName" placeholder="Account" />
                  </InputWrapper>
                  <PasswordInput name="password" label="Password" />
                  <Center>
                    {" "}
                    <Button type="submit" size="sm">
                      Sign In
                    </Button>
                    <Space w={"md"}></Space>
                    <Button size="sm">Sign Up</Button>
                  </Center>
                </Stack>
              </Paper>
            </Box>
          </form>
        </Center>
      </Container>
    </>
  );
}
