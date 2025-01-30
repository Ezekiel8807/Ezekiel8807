type projectProbs = {
  projectData: {
    name: string;
    image: string;
    description: string;
    link: string;
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
          <a href="/" className="text-white px-5 py-1 rounded bg-[#0077ff]">
            🏪Reop
          </a>
          <a
            href={probs.projectData.link}
            className="px-5 py-1 hover:text-[#0077ff]"
          >
            Live 🚀
          </a>
        </div>
      </div>
    </div>
  );
}
