import prisma from "@/lib/prisma";

const getDepartmentsData = async () => {
  const departments = await prisma.departments.findMany();
  return departments;
};

export default async function Page() {
  const departments = await getDepartmentsData();

  const DepartmentItems = departments.map((department) => {
    return <div key={department.id}> {department.dept_name}</div>;
  });

  return <div>{DepartmentItems}</div>;
}
