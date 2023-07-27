import Link from "next/link";

const RenderLi = ({ amount }: { amount: number }) => {
  return (
    <>
      {" "
        .repeat(amount)
        .split("")
        .map((v) => (
          <li key={`${Math.random()}`}>dot</li>
        ))}
    </>
  );
};

const Page = () => {
  const data = ["#1", "#2", "#3"];

  return (
    <div>
      <h1>Link</h1>
      <nav>
        {data.map((v) => (
          <Link key={v} href={v}>
            {v}
          </Link>
        ))}
      </nav>
      <ul>
        <h2 id="1">1</h2>
        <RenderLi amount={100} />

        <h2 id="2">2</h2>
        <RenderLi amount={100} />

        <h2 id="3">3</h2>
        <RenderLi amount={100} />
      </ul>
    </div>
  );
};

export default Page;
