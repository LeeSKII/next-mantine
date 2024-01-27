export async function GET() {
  const res = await fetch("https://api.oioweb.cn/api/common/OneDayEnglish");
  return res.json();
}
