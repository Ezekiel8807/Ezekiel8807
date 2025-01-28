import Ranks from "./Ranks";

type testimonyCardProbs = {
  testimonyData: {
    name: string;
    about: string;
    image: string;
  };
};
export default function TestimonyCard(probs: testimonyCardProbs) {
  return (
    <div
      className={`group hover:bg-[#0077ff] card w-[280px] md:w-[300px] inline-block m-5 p-5`}
    >
      <img
        className="w-[100px] h-[100px] bg-red-300 rounded-full mx-auto"
        src={probs.testimonyData.image}
      />

      <Ranks nums={[1, 2, 3, 4, 5]} />

      <p className="group-hover:text-white text-sm whitespace-normal">
        Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus
        eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum
        potenti tempus
      </p>

      <div className="group-hover:text-white text-center mt-3">
        <h4 className="font-black">Jenny Wilson</h4>
        <p>Medical Assistant</p>
      </div>
    </div>
  );
}
