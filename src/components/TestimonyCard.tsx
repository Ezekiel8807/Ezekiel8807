import Ranks from "./Ranks";

type testimonyCardProbs = {
  testimonyData: {
    name: string;
    content: string;
    image: string;
    profession: string;
  };
};
export default function TestimonyCard(probs: testimonyCardProbs) {
  return (
    <div className={`group hover:bg-[#0077ff] card w-[280px] p-5`}>
      <img
        className="w-[100px] h-[100px] rounded-full mx-auto"
        src={probs.testimonyData.image}
      />

      <Ranks nums={[1, 2, 3, 4, 5]} />

      <p className="group-hover:text-white text-sm">
        {probs.testimonyData.content}
      </p>

      <div className="group-hover:text-white text-center mt-3">
        <h4 className="font-black">{probs.testimonyData.name}</h4>
        <p>{probs.testimonyData.profession}</p>
      </div>
    </div>
  );
}
