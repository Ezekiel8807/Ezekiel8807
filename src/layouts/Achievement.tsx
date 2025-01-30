import AchieveCard from "../components/AchieveCard";
import TopHeader from "../components/TopHeader";

export default function Achievement() {
  const achievements = [
    {
      len: "100%", // Number of skills involved (frontend and backend)
      content:
        "Comprehensive Fullstack Expertise: Ability to seamlessly handle both frontend (React.js) and backend (Node.js, Django) development, combined with your database management skills (MySQL, MongoDB), allows you to deliver complete, end-to-end solutions.",
    },
    {
      len: "3800+", // Number of areas of expertise (teaching, mentorship, project building)
      content:
        "Focus on Teaching and Mentorship: With a strong background in teaching and mentorship, including as Head of Faculty and Instructor, you not only build exceptional projects but also share your expertise, helping others level up their development skills.",
    },
    {
      len: "240+", // Number of technologies/tools involved (Tailwind, Bootstrap, Git, Vercel, Heroku, Cloud Platforms)
      content:
        "Hands-On Experience with Cutting-Edge Technologies: Your proficiency with modern web development tools (Tailwind, Bootstrap, Git, Vercel, Heroku) and cloud platforms makes you a versatile developer capable of building high-performing, scalable applications.",
    },
    {
      len: "100%", // Number of skills involved (React, JavaScript)
      content:
        "Commitment to Continuous Learning and Mastery: Your drive to master React and JavaScript sets you apart as someone who constantly seeks to improve, ensuring you stay on top of industry trends and deliver solutions that are both innovative and optimized.",
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-between m-5 md:m-10">
        {achievements.map((achievement) => (
          <AchieveCard key={achievement.content} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
