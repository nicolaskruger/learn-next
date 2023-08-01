export default async function Page() {
  const data: { msg: string } = await (
    await fetch("http://localhost:3000/api")
  ).json();

  return <div>{data.msg}</div>;
}
