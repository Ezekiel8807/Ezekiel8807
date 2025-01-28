// images

import Button from "./Button";

type projectProbs = {
  projectData: {
    name: string;
    image: string;
    description: string;
  };
};
export default function Project(probs: projectProbs) {
  return (
    <div className="card">
      <img
        className="rounded-lg"
        src={probs.projectData.image}
        alt="project image 1"
      />
      <div className="p-2">
        <h1 className="font-black my-2 text-2xl">{probs.projectData.name}</h1>
        <p className="mb-3">{probs.projectData.description}</p>

        <div className="flex flex-row justify-between py-2">
          <Button buttonStyle="text-white px-3 py-1 rounded bg-[#0077ff]">
            🏪Reop
          </Button>
          <Button>Live 🚀</Button>
        </div>
      </div>
    </div>
  );
}
