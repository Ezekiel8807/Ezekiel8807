import TopHeader from "../components/TopHeader";
import Project from "../components/Project";

// images
import image1 from "../assets/img/contactBg.svg";

export default function Projects() {
  const projects: {
    name: string;
    description: string;
    image: string;
  }[] = [
    {
      name: "Website / App DesignUX / UI Design",
      description:
        "Creating Engaging Digital Experiences for Websites and Apps through UX/U",
      image: `${image1}`,
    },
    {
      name: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
      image: `${image1}`,
    },

    {
      name: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
      image: `${image1}`,
    },

    {
      name: "Multivendor eCommerce Website Solutions",
      description: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${image1}`,
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      description: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${image1}`,
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      description: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${image1}`,
    },
  ];
  return (
    <div>
      <TopHeader>
        <h6 className="font-black text-md text-[#0077ff]">PROJECTS</h6>
        <h1 className="font-black py-1 text-3xl text-[#222222]">
          Presenting My Design Portfolio and Case Studies
        </h1>
      </TopHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 md:m-10 gap-5 ">
        {projects.map((project) => (
          <Project key={project.name} projectData={project} />
        ))}
      </div>
    </div>
  );
}
