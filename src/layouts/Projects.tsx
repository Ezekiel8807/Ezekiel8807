import TopHeader from "../components/TopHeader";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div>
      <TopHeader>
        <h6 className="font-black text-md text-[#0077ff]">PROJECTS</h6>
        <h1 className="font-black py-1 text-3xl text-[#222222]">
          Presenting My Design Portfolio and Case Studies
        </h1>
      </TopHeader>

      <div className="p-5">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
