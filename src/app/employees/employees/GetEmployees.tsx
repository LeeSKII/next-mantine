import prisma from "@/lib/prisma";

// const getEmployeesTopByNum = async (num: number = 10, page: number = 0) => {
//   const employees = await prisma.employees.findMany({
//     take: num,
//     skip: page * num,
//   });
//   return employees;
// };

const getEmployeesTopByNum = async (num: number = 10, page: number = 0) => {
  //console.log(num);
  const employees = [
    { emp_no: 1, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 2, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 3, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 4, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 5, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 6, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 7, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 8, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 9, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 10, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 11, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 12, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 13, last_name: `Foo1${num}`, first_name: "Bar1" },
    { emp_no: 14, last_name: `Foo1${num}`, first_name: "Bar1" },
  ];
  return employees;
};

export async function GetFastEmployees({ num }: { num: number }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const employees = await getEmployeesTopByNum(num);
  const employeeItems = employees.map((employee) => (
    <div key={employee.emp_no}>{employee.last_name}</div>
  ));
  return <div>{employeeItems}</div>;
}

export async function GetSlowEmployees({ num }: { num: number }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const employees = await getEmployeesTopByNum(num);
  const employeeItems = employees.map((employee) => (
    <div key={employee.emp_no}>{employee.last_name}</div>
  ));
  return <div>{employeeItems}</div>;
}
