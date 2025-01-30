import TopHeader from "../components/TopHeader";
import ScrollerDiv from "./ScrollerDiv";
import TestimonyCard from "../components/TestimonyCard";

// images
import image1 from "../assets/a.jpg";

export default function Testimony() {
  const testimonials: {
    name: string;
    content: string;
    image: string;
    profession: string;
  }[] = [
    {
      name: "John Doe",
      image: `${image1}`,
      content:
        "Ayebidun's expertise in Fullstack development and his dedication to mentoring others have been invaluable. His ability to teach complex concepts while delivering top-notch projects has truly helped me elevate my career.",
      profession: "Software Engineer",
    },
    {
      name: "Sarah Smith",
      image: `${image1}`,
      content:
        "His deep knowledge of React.js and backend technologies like Node.js and Django helped me build real-world applications with ease. Ayebidun doesn't just teach, he makes you feel like you can tackle any challenge.",
      profession: "Frontend Developer",
    },
    {
      name: "James Lee",
      image: `${image1}`,
      content:
        "Working with Ayebidun was an eye-opening experience. He guided me through React, Node.js, and cloud deployments, always ensuring I understood the concepts. His mentorship helped me grow as both a developer and a problem solver.",
      profession: "Fullstack Developer",
    },
    {
      name: "Emily Wang",
      image: `${image1}`,
      content:
        "Ayebidun’s hands-on experience with cutting-edge technologies like Tailwind, Bootstrap, and Git, along with cloud platforms like Vercel and Heroku, helped me gain the practical knowledge needed for scalable app development.",
      profession: "Web Developer",
    },
    {
      name: "Michael Brown",
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
