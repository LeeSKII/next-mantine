import {
  Container,
  Title,
  Text,
  Box,
  Paper,
  Center,
  Stack,
} from "@mantine/core";
import Link from "next/link";

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
        <Link href={`/department/${department.dept_name}`}>
          <Text>
            {department.dept_no}-{department.dept_name}
          </Text>
        </Link>
      </Box>
    );
  });

  return (
    <Container size={"md"}>
      <Paper mt={"lg"}>
        <Center>
          <Stack>{DepartmentItems}</Stack>
        </Center>
      </Paper>
    </Container>
  );
}
