type scrollerDivProbs = {
  children: React.ReactNode;
};
export default function ScrollerDiv(probs: scrollerDivProbs) {
  return (
    <div className="mx-auto relative whitespace-nowrap overflow-x-scroll no-scrollbar">
      {probs.children}
    </div>
  );
}
