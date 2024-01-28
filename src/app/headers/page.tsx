import Headers from "@/components/headers/Headers";

import {
  ServerComponentsInHeader,
  ServerComponentsInHeader2,
  ServerComponentsInHeader3,
} from "./ServerComponentsInHeader";

export default function Home() {
  return (
    <>
      <Headers>
        <ServerComponentsInHeader></ServerComponentsInHeader>
        <ServerComponentsInHeader2></ServerComponentsInHeader2>
        <ServerComponentsInHeader3></ServerComponentsInHeader3>
      </Headers>
    </>
  );
}
