// Page页面获取params的路由参数和searchParams参数

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div>params:{params.slug}</div>
      <div>query:{searchParams?.query && searchParams["query"]}</div>
    </>
  );
}
