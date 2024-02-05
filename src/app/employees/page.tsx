import { Container, Title, Text, Box } from "@mantine/core";
import prisma from "@/lib/prisma";

const getDepartmentsData = async () => {
  const departments = await prisma.departments.findMany({
    include: {
      dept_emp: {
        include: {
          employees: true,
        },
      },
    },
  });
  return departments;
};

export default async function Page() {
  const departments = await getDepartmentsData();

  const DepartmentItems = departments.map((department) => {
    const emps = department.dept_emp;
    const Emp = emps.map((emp, index) => {
      return (
        <Text key={emp.emp_no}>
          {index}.{emp.employees.first_name}-{emp.employees.last_name}
        </Text>
      );
    });
    return (
      <div key={department.dept_no}>
        {" "}
        <Title order={2}>{department.dept_name}</Title>
        <Text size={"md"}>{Emp}</Text>
      </div>
    );
  });

  return <Container size={"md"}>{DepartmentItems}</Container>;
}
