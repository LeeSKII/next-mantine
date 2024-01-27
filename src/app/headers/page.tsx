import Headers from "@/components/headers/Headers";

import {
  ServerComponentsInHeader,
  ServerComponentsInHeader2,
} from "@/widgets/ServerComponentsInHeader";

export default function Home() {
  return (
    <>
      <Headers>
        <ServerComponentsInHeader></ServerComponentsInHeader>
        <ServerComponentsInHeader2></ServerComponentsInHeader2>
      </Headers>
    </>
  );
}
