import TopHeader from "../components/TopHeader";
import ScrollerDiv from "./ScrollerDiv";
import TestimonyCard from "../components/TestimonyCard";

// images
import image1 from "../assets/icons/user-139.svg";

export default function Testimony() {
  const testimonials: {
    name: string;
    content: string;
    image: string;
    profession: string;
  }[] = [
    {
      name: "Chinedu Okafor",
      image: `${image1}`,
      content:
        "Ayebidun’s expertise in full-stack development and his passion for mentoring have been truly impactful. His ability to break down complex concepts while delivering excellent projects has greatly helped me grow in my career.",
      profession: "Software Engineer",
    },
    {
      name: "Sarah Mitchell",
      image: `${image1}`,
      content:
        "His deep knowledge of React.js and backend technologies like Node.js and Django helped me build real-world applications with ease. Ayebidun doesn't just teach, he makes you feel like you can tackle any challenge.",
      profession: "Frontend Developer",
    },
    {
      name: "Tunde Adeyemi",
      image: `${image1}`,
      content:
        "Working with Ayebidun was a game-changer. He guided me through React, Node.js, and cloud deployments, always making sure I grasped the concepts. His mentorship helped me grow both as a developer and a problem solver.",
      profession: "Fullstack Developer",
    },
    {
      name: "Fatima Yusuf",
      image: `${image1}`,
      content:
        "Ayebidun’s hands-on experience with modern technologies like Tailwind, Bootstrap, and Git, along with cloud platforms like Vercel and Heroku, gave me the practical knowledge I needed for building scalable applications.",
      profession: "Web Developer",
    },
    {
      name: "Michael Brownstone",
      image: `${image1}`,
      content:
        "I’ve been learning with Ayebidun for a while now, and his commitment to React and JavaScript mastery is evident in everything he does. His passion for continuous learning and teaching is contagious, and I’ve gained so much in the process.",
      profession: "Junior Developer",
    },
  ];

  return (
    <div>
      <TopHeader>
        <h6 className="font-black text-md text-[#0077ff]">TESTIMONIALS</h6>
        <h1 className="font-black py-1 text-3xl text-[#222222]">
          The Trust From Clients
        </h1>
      </TopHeader>

      <ScrollerDiv>
        {testimonials.map((testimony) => (
          <TestimonyCard key={testimony.name} testimonyData={testimony} />
        ))}
      </ScrollerDiv>
    </div>
  );
}
