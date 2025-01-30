type scrollerDivProbs = {
  children: React.ReactNode;
};
export default function ScrollerDiv(probs: scrollerDivProbs) {
  return (
    <div className="mx-auto grid grid-flow-col p-5 md:p-10 gap-5 overflow-x-scroll no-scrollbar">
      {probs.children}
    </div>
  );
}
