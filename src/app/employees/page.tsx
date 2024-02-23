import {
  Paper,
  Box,
  Title,
  Text,
  Anchor,
  Center,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";

export default function Page() {
  return (
    <Paper mt={20} shadow={"md"} withBorder radius={"md"}>
      <Center my={10}>
        <Title order={1}>Employees Database</Title>
      </Center>
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing={"xl"}>
        <Paper
          m={10}
          withBorder
          component={Link}
          href={"/employees/department"}
        >
          <Center h={100}>
            <Box>
              <Title order={3} style={{ color: "black" }}>
                Department
              </Title>
            </Box>
          </Center>
        </Paper>
        <Paper m={10} withBorder component={Link} href={"/employees/employees"}>
          <Center h={100}>
            <Box>
              <Title order={3} style={{ color: "black" }}>
                Mock Employees
              </Title>
            </Box>
          </Center>
        </Paper>
        <Paper
          m={10}
          withBorder
          component={Link}
          href={"/employees/employees/1"}
        >
          <Center h={100}>
            <Box>
              <Title order={3} style={{ color: "black" }}>
                Employees
              </Title>
            </Box>
          </Center>
        </Paper>
      </SimpleGrid>
    </Paper>
  );
}
