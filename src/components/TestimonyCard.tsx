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
      className={`group hover:bg-[#0077ff] card w-[280px] md:w-[300px] inline-block first:ml-5 md:first:ml-10 mr-5 md:mr-10 mb-16 p-5`}
    >
      <img
        className="w-[100px] h-[100px] rounded-full mx-auto"
        src={probs.testimonyData.image}
      />

      <Ranks nums={[1, 2, 3, 4, 5]} />

      <p className="group-hover:text-white text-sm whitespace-normal">
        Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus
        eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum
        potenti tempus
      </p>

      <div className="group-hover:text-white text-center mt-3">
        <h4 className="font-black">Ayebidun Ezekiel</h4>
        <p>Frontend Engineer</p>
      </div>
    </div>
  );
}
