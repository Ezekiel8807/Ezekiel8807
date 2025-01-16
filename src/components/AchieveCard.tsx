type AchieveCardProbs = {
  len: string;
  content: string;
};

export default function AchieveCard(props: AchieveCardProbs) {
  return (
    <div className="w-[200px] rounded-[15px] p-5 m-5 bg-white shadow-black hover:shadow-2xl">
      <h1 className="font-black text-3xl text-center">{props.len}</h1>
      <h5 className="font-black text-sm text-center">{props.content}</h5>
    </div>
  );
}
