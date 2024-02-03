import Headers from "@/components/headers/Headers";

import Loading from "./loading";

import {
  ServerComponentsInHeader,
  ServerComponentsInHeader2,
  ServerComponentsInHeader3,
} from "./ServerComponentsInHeader";
import { Suspense } from "react";

export const revalidate = 0; // 每次请求时，重新验证页面

export default function Home() {
  return (
    <>
      <Headers>
        <Suspense fallback={<Loading></Loading>}>
          <ServerComponentsInHeader></ServerComponentsInHeader>
        </Suspense>
        <Suspense fallback={<Loading></Loading>}>
          <ServerComponentsInHeader2></ServerComponentsInHeader2>
        </Suspense>
        <ServerComponentsInHeader3></ServerComponentsInHeader3>
      </Headers>
    </>
  );
}
