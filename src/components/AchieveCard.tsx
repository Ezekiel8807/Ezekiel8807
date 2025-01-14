type AchieveCardProbs = {
  len: string;
  content: string;
};

export default function AchieveCard({ len, content }: AchieveCardProbs) {
  return (
    <div className="w-[200px] rounded-[15px] p-5 m-5 bg-white">
      <h1 className="font-black text-3xl text-center">{len}</h1>
      <h5 className="font-black text-sm text-center">{content}</h5>
    </div>
  );
}
