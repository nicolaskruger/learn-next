import Link from "next/link";

export default function Home() {
  const links = ["/001counter", "/002sidebar"];

  return (
    <ul>
      {links.map((l) => (
        <li key={l}>
          <Link href={l}>{l}</Link>
        </li>
      ))}
    </ul>
  );
}