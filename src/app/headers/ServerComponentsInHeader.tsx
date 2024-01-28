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

export async function ServerComponentsInHeader3() {
  return (
    <>
      <div>Api Collection:</div>
      <div>
        <a
          href="https://cloud.tencent.com/developer/article/2081636"
          target="_blank"
        >
          https://cloud.tencent.com/developer/article/2081636
        </a>
      </div>
      <div>
        <a href="https://api.oioweb.cn/" target="_blank">
          api1
        </a>
      </div>
      <div>
        <a href="https://api.uomg.com/" target="_blank">
          api2
        </a>
      </div>
    </>
  );
}
