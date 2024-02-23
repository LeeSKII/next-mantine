import prisma from "@/lib/prisma";

const getEmployeesTopByNum = async (num: number = 10, page: number = 0) => {
  const employees = await prisma.employees.findMany({
    take: num,
    skip: page * num,
  });
  return employees;
};

export async function GetFastEmployees({
  num,
  page,
}: {
  num: number;
  page: number;
}) {
  const employees = await getEmployeesTopByNum(num, page);
  const employeeItems = employees.map((employee) => (
    <div key={employee.emp_no}>{employee.last_name}</div>
  ));
  return <div>{employeeItems}</div>;
}

export async function GetSlowEmployees({
  num,
  page,
}: {
  num: number;
  page: number;
}) {
  const employees = await getEmployeesTopByNum(num, page);
  const employeeItems = employees.map((employee) => (
    <div key={employee.emp_no}>{employee.last_name}</div>
  ));
  return <div>{employeeItems}</div>;
}
