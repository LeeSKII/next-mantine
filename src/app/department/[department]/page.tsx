import { Container, Paper, Box, Title, Text } from "@mantine/core";
import prisma from "@/lib/prisma";

import EmpPagination from "./EmpPagination";

export const dynamic = "force-dynamic";

const getDeptEmployeesCount = async (dept_no: string) => {
  if (!dept_no) {
    return 0; // or throw an error
  }
  const count = await prisma.dept_emp.count({
    where: {
      dept_no,
    },
  });
  return count;
};

const getDepartmentInfo = async (
  dept_no: string,
  current_page: number = 1,
  row_per_page: number = 20
) => {
  if (!dept_no) {
    return [];
  }

  const deptEmp = await prisma.dept_emp.findMany({
    where: {
      dept_no,
    },
    include: {
      employees: true,
    },
    skip: current_page * row_per_page,
    take: row_per_page,
  });

  return deptEmp;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { department: string };
  searchParams: { dept_no: string; current_page: string; row_per_page: string };
}) {
  const { dept_no, current_page, row_per_page } = searchParams;
  const count = await getDeptEmployeesCount(dept_no);
  const currentPage = parseInt(current_page) || 1;
  const rowPerPage = parseInt(row_per_page) || 20;
  const deptInfo = await getDepartmentInfo(dept_no, currentPage, rowPerPage);

  // Render the list of employees
  const employeeList = deptInfo.map((dept) => {
    return (
      <Box key={dept.emp_no} mt={"md"}>
        {dept.employees.first_name}-{dept.employees.last_name}
      </Box>
    );
  });

  return (
    <Container>
      <Paper>
        <Box mt={"lg"}>
          <Title order={1}>
            {params.department && decodeURIComponent(params.department)}
          </Title>
          <Title order={2}>{count}</Title>

          <EmpPagination
            department={decodeURIComponent(params.department)}
            dept_no={dept_no}
            totalNum={count}
            singleNum={50}
          ></EmpPagination>

          <Box>
            <Text size={"md"}>{employeeList}</Text>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
