type topHeaderProbs = {
  children: React.ReactNode;
};

export default function TopHeader(props: topHeaderProbs) {
  return <div className="text-center mx-auto p-10">{props.children}</div>;
}
