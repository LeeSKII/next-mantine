"use client";
import { useState } from "react";
import { Pagination } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function EmpPagination({
  department,
  dept_no,
  totalNum,
  singleNum,
}: {
  department: string;
  dept_no: string;
  totalNum: number;
  singleNum: number;
}) {
  const router = useRouter();
  const [activePage, setPage] = useState(1);
  const pages = Math.round(totalNum / singleNum);

  //注意这里的分页逻辑，必须使用newPage，如果使用activePage，React使用的还是上次的旧值，还未得到更新
  return (
    <Pagination
      value={activePage}
      onChange={(newPage) => {
        setPage(newPage);
        router.push(
          `/department/${department}?dept_no=${dept_no}&current_page=${newPage}&row_per_page=${10}`
        );
      }}
      total={pages}
    />
  );
}
