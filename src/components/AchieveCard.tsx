type AchieveCardProbs = {
  achievement: { len: string; content: string };
};

export default function AchieveCard(props: AchieveCardProbs) {
  return (
    <div className="bg-white p-10 mb-5 md:mb-10 rounded-lg shadow-black hover:shadow-2xl">
      <h1 className="font-black text-3xl text-center">
        {props.achievement.len}
      </h1>
      <h5 className="text-sm text-center">{props.achievement.content}</h5>
    </div>
  );
}
