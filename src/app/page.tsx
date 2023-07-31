import Link from "next/link";

export default function Home() {
  const links = [
    "/001counter",
    "/002sidebar",
    "/003counter",
    "/004user",
    "/005sum-by-amount",
    "/006link-to-id",
    "/account",
    "/about",
    "/blog",
    "/007d-route/1",
    "/008catch-all/1/2/3",
    "/009optional/1/2/3",
    "/010loading",
    "/011error",
    "/012paralel",
  ];

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
