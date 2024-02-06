export default function Page({ params }: { params: { department: string } }) {
  return (
    <div>{params.department && decodeURIComponent(params.department)}</div>
  );
}
