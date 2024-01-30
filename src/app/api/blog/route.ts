import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

// 通过路由端点获取请求参数，然后通过redirect进行转发，这样可以token传入该端点，然后进行身份验证再进行转发
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams.get("query");
  const id = "id" + searchParams;
  redirect(`/blog/${id}`);
}
