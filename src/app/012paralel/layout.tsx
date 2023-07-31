type Prop = {
  children: React.ReactNode;
  ana: React.ReactNode;
  team: React.ReactNode;
};

export default function Layout(props: Prop) {
  return (
    <>
      {props.children}
      {props.ana}
      {props.team}
    </>
  );
}
