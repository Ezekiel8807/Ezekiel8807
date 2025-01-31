import AchieveCard from "../components/AchieveCard";
import TopHeader from "../components/TopHeader";

export default function Achievement() {
  const achievements = [
    {
      len: "100%", // Number of skills involved (frontend and backend)
      content:
        "Expert in Fullstack development, handling React.js, Node.js, Django, and databases for complete solutions.",
    },
    {
      len: "3800+", // Number of areas of expertise (teaching, mentorship, project building)
      content:
        "Passionate mentor and instructor, leveraging experience as Head of Faculty to teach, guide, and elevate developers' skills.",
    },
    {
      len: "240+", // Number of technologies/tools involved (Tailwind, Bootstrap, Git, Vercel, Heroku, Cloud Platforms)
      content:
        "Skilled in modern web tools (Tailwind, Bootstrap, Git, Vercel, Heroku), building scalable and high-performance applications.",
    },
    {
      len: "100%", // Number of skills involved (React, JavaScript)
      content:
        "Dedicated to mastering React and JavaScript, continuously improving to deliver innovative and optimized solutions.",
    },
  ];

  return (
    <div className="achievement bg-[#0077ff]">
      <TopHeader>
        <h6 className="font-black text-md text-[#ffffff]">MILESTONES</h6>
        <h1 className="font-black py-1 text-3xl text-[#ffffff]">
          What sets me apart for your projects?
        </h1>
      </TopHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-between m-5 md:m-10">
        {achievements.map((achievement) => (
          <AchieveCard key={achievement.content} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
