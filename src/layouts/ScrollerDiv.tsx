type scrollerDivProbs = {
  children: React.ReactNode;
};
export default function ScrollerDiv(probs: scrollerDivProbs) {
  return (
    <div className="mx-auto relative whitespace-nowrap overflow-x-scroll scroll-m-0">
      {probs.children}
    </div>
  );
}
