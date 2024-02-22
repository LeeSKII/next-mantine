import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const getEmployeesTop1000 = async () => {
  const employees = await prisma.employees.findMany({
    take: 1000,
  });
  return employees;
};

export default async function Page() {
  const employees = await getEmployeesTop1000();
  const employeeItems = employees.map((employee) => (
    <div key={employee.emp_no}>{employee.last_name}</div>
  ));
  return <div>{employeeItems}</div>;
}
