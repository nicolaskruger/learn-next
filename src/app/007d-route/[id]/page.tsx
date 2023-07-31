export default function Page({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>;
}

const getIds = async () => ["1", "2", "3"];

export async function generateStaticParams() {
  const ids = await getIds();

  return ids.map((id) => ({
    id: id,
  }));
}
