import { Paper, Title, Divider, Box } from "@mantine/core";
import { Suspense } from "react";

import { GetFastEmployees, GetSlowEmployees } from "./GetEmployees";
import { EmpPagination } from "./EmpPagination";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page || "1");
  return (
    <Box>
      <Box>
        <Suspense fallback={null}>
          <EmpPagination></EmpPagination>
        </Suspense>
      </Box>
      <Suspense fallback={<p>Loading faster...</p>}>
        <GetFastEmployees num={page}></GetFastEmployees>
      </Suspense>
      <Divider></Divider>
      <Suspense fallback={<p>Loading slower...</p>}>
        <GetSlowEmployees num={page}></GetSlowEmployees>
      </Suspense>
    </Box>
  );
}
