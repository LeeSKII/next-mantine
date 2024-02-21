import { Container, Paper, Box, Title, Text, Anchor } from "@mantine/core";
import prisma from "@/lib/prisma";

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

export async function Employees({
  dept_no,
  currentPage,
  rowPerPage,
}: {
  dept_no: string;
  currentPage: number;
  rowPerPage: number;
}) {
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
    <Box>
      <Text size={"md"}>{employeeList}</Text>
    </Box>
  );
}
