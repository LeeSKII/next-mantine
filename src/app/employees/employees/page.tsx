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
  const page = Number(searchParams.page || "1");
  return (
    <Box>
      <Box>
        <EmpPagination></EmpPagination>
      </Box>
      {/* 通过给suspense增加key，实现在后续的路由变换中suspense的fallback可以征程运作 */}
      <Suspense
        key={searchParams.page + "A"}
        fallback={<p>Loading faster...</p>}
      >
        <GetFastEmployees num={page}></GetFastEmployees>
      </Suspense>
      <Divider></Divider>
      <Suspense key={searchParams.page} fallback={<p>Loading slower...</p>}>
        <GetSlowEmployees num={page}></GetSlowEmployees>
      </Suspense>
    </Box>
  );
}
