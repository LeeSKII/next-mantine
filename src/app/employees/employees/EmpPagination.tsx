"use client";
import { useState, useEffect } from "react";
import { Pagination } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";

export function EmpPagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  let currentPage = Number(searchParams.get("page") || "1");
  const [activePage, setPage] = useState(1);

  //注意这里的分页逻辑，必须使用newPage，如果使用activePage，React使用的还是上次的旧值，还未得到更新
  return (
    <Pagination
      value={currentPage}
      onChange={(newPage) => {
        setPage(newPage);
        router.push(`/employees/employees?page=${newPage}`);
      }}
      total={10}
    />
  );
}
