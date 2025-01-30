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
  }[] = [
    {
      name: "kwickerhub",
      description:
        "Creating Engaging Digital Experiences for Websites and Apps through UX/U",
      image: `${imagea}`,
      link: "https://roynek.com/kwickerhub/WebCraftifyAI/",
    },
    {
      name: "Room8",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
      image: `${imageb}`,
      link: "https://room8.vercel.app/",
    },
    {
      name: "Ezefizzy",
      description: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${imaged}`,
      link: "https://ayebidunezekiel.vercel.app/",
    },
    {
      name: "oiling",
      description: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${imagef}`,
      link: "https://codeneacademy.netlify.app/",
    },
    {
      name: "codeneacademy",
      description: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${imageg}`,
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
