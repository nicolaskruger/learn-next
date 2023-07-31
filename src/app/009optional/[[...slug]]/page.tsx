export default function Page({ params }: { params?: { slug?: string[] } }) {
  return (
    <ul>
      {params?.slug?.map((v) => (
        <li key={v}>{v}</li>
      ))}
    </ul>
  );
}
