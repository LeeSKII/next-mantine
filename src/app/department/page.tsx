import {
  Container,
  Title,
  Text,
  Box,
  Paper,
  Center,
  Stack,
  Anchor,
} from "@mantine/core";
import NextLink from "next/link";

import prisma from "@/lib/prisma";

const getDepartmentsData = async () => {
  const departments = await prisma.departments.findMany();
  return departments;
};

export default async function Page() {
  const departments = await getDepartmentsData();

  const DepartmentItems = departments.map((department) => {
    return (
      <Box key={department.dept_no}>
        {" "}
        <NextLink
          href={`/department/${department.dept_name}?dept_no=${department.dept_no}`}
        >
          <Text>
            {department.dept_no}-{department.dept_name}
          </Text>
        </NextLink>
      </Box>
    );
  });

  return (
    <Container size={"md"}>
      <Paper mt={"lg"}>
        <Center>
          <Anchor component={NextLink} href={"/"}>
            Go Back
          </Anchor>
        </Center>
        <Center>
          <Stack>{DepartmentItems}</Stack>
        </Center>
      </Paper>
    </Container>
  );
}
