type mainprops = {
  children: React.ReactNode;
};

export default function Main(props: mainprops) {
  return <main className="container mx-auto md:my-5">{props.children}</main>;
}
