import { Paper, Title, Divider, Box } from "@mantine/core";
import { Suspense } from "react";

import { GetFastEmployees, GetSlowEmployees } from "./GetEmployees";
import { EmpPagination } from "./EmpPagination";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { page: string } }) {
  const page = parseInt(params.page || "1");
  console.log(page);
  return (
    <Box>
      <Box>
        <EmpPagination currentPage={page}></EmpPagination>
      </Box>
      <Suspense fallback={<p>Loading faster...</p>}>
        <GetFastEmployees num={10} page={page - 1}></GetFastEmployees>
      </Suspense>
      <Divider></Divider>
      <Suspense fallback={<p>Loading slower...</p>}>
        <GetSlowEmployees num={1000} page={page - 1}></GetSlowEmployees>
      </Suspense>
    </Box>
  );
}
