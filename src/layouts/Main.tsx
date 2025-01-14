type mainprops = {
  children: React.ReactNode;
};

export default function Main(props: mainprops) {
  return <main>{props.children}</main>;
}
