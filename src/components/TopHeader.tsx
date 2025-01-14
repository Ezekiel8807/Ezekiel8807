type topHeaderProbs = {
  children: React.ReactNode;
};

export default function TopHeader(props: topHeaderProbs) {
  return (
    <div className="text-center w-[100%] md:w-[45%] mx-auto p-6 md:p-10">
      {props.children}
    </div>
  );
}
