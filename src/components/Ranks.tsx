import star from "../assets/icons/Vector.svg";

type starProbs = {
  nums: number[];
};

export default function Ranks(probs: starProbs) {
  return (
    <div className="flex flex-row justify-center my-5">
      {probs.nums.map((num) => (
        <img src={star} alt={`${num} ${star}`} />
      ))}
    </div>
  );
}
