import Image from "next/image";

type OneDayEnglish = {
  tts: string;
  content: string;
  note: string;
  img: string;
  dateline: string;
};
type OneDayEnglishResponse = {
  code: number;
  result: OneDayEnglish;
  msg: string;
};

type QingHua = {
  code: number;
  content: string;
};

//测试的第一个服务器组件
export async function ServerComponentsInHeader() {
  const res: Response = await fetch(
    "https://api.oioweb.cn/api/common/OneDayEnglish"
  );
  const data: OneDayEnglishResponse = await res.json();
  return (
    <>
      <div>{data.result.content}</div>
      <div>{data.result.note}</div>
      <Image
        src={data.result.img}
        alt={data.result.content}
        width={200}
        height={300}
      ></Image>
    </>
  );
}
//测试的第二个服务器组件
export async function ServerComponentsInHeader2() {
  const res: Response = await fetch("https://api.uomg.com/api/rand.qinghua", {
    cache: "no-store",
  });
  const data: QingHua = await res.json();
  return (
    <>
      <div>{data.content}</div>
    </>
  );
}
