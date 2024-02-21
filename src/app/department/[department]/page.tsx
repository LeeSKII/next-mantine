import { Container, Paper, Box, Title, Text, Anchor } from "@mantine/core";
import NextLink from "next/link";
import prisma from "@/lib/prisma";

import EmpPagination from "./EmpPagination";
import { Suspense } from "react";

import Loading from "./loading";
import { Employees } from "./Employees";

//export const dynamic = "force-dynamic";

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

  return (
    <Container>
      <Paper mt={"lg"}>
        <Box>
          <Anchor size={"md"} component={NextLink} href={"/department"}>
            Go Back
          </Anchor>
        </Box>
        <Box mt={"sm"}>
          <Title order={1}>
            {params.department && decodeURIComponent(params.department)}
          </Title>
          <Suspense fallback={<Loading></Loading>}>
            <Title order={2}>{count}</Title>
          </Suspense>
          <Suspense fallback={<Loading></Loading>}>
            <EmpPagination
              department={decodeURIComponent(params.department)}
              dept_no={dept_no}
              totalNum={count}
              singleNum={50}
            ></EmpPagination>
          </Suspense>
          <Suspense fallback={<Loading></Loading>}>
            <Employees
              dept_no={dept_no}
              currentPage={currentPage}
              rowPerPage={rowPerPage}
            ></Employees>
          </Suspense>
        </Box>
      </Paper>
    </Container>
  );
}
