import TopHeader from "../components/TopHeader";
import Project from "../components/Project";

// images
import imagea from "../assets/img/bg/Screenshot 2025-01-29 160205.png";
import imageb from "../assets/img/bg/Screenshot 2025-01-29 160359.png";
import imaged from "../assets/img/bg/Screenshot 2025-01-29 160454.png";
import imagef from "../assets/img/bg/Screenshot 2025-01-29 160614.png";
import imageg from "../assets/img/bg/Screenshot 2025-01-29 160648.png";

export default function Projects() {
  const projects: {
    name: string;
    description: string;
    image: string;
    link: string;
    repo: string;
  }[] = [
    {
      name: "kwickerhub",
      description:
        "A platform that brings your ideas to life with innovative solutions and development expertise.",
      image: `${imagea}`,
      repo: "https://github.com/Ezekiel8807/frontend",
      link: "https://roynek.com/kwickerhub/WebCraftifyAI/",
    },
    {
      name: "Room8",
      description:
        "A user-friendly website for finding and listing houses and apartments with seamless navigation.",
      image: `${imageb}`,
      repo: "https://github.com/Ezekiel8807/room8",
      link: "https://room8.vercel.app/",
    },
    {
      name: "Ezefizzy",
      description:
        "A sleek and responsive portfolio showcasing skills, projects, and achievements with a modern design.",
      image: `${imaged}`,
      repo: "https://github.com/Ezekiel8807/Ezekiel8807",
      link: "https://ayebidunezekiel.vercel.app/",
    },
    {
      name: "oiling",
      description:
        "An eCommerce platform for buying and selling quality food oil with a seamless shopping experience.",
      image: `${imagef}`,
      repo: "https://github.com/Ezekiel8807/oiling",
      link: "https://codeneacademy.netlify.app/",
    },
    {
      name: "codeneacademy",
      description:
        "An online platform for comprehensive Fullstack, Frontend, and Backend development courses.",
      image: `${imageg}`,
      repo: "https://github.com/Ezekiel8807/codene_",
      link: "https://codeneacademy.netlify.app/",
    },
  ];
  return (
    <div id="projects">
      <TopHeader>
        <h6 className="font-black text-md text-[#0077ff]">PROJECTS</h6>
        <h1 className="font-black py-1 text-3xl text-[#222222]">
          Presenting My Design Portfolio and Case Studies
        </h1>
      </TopHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:sm:grid-cols-3 m-5 md:m-10 gap-5 ">
        {projects.map((project) => (
          <Project key={project.name} projectData={project} />
        ))}
      </div>
    </div>
  );
}
