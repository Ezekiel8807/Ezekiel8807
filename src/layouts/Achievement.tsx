import AchieveCard from "../components/AchieveCard";
import TopHeader from "../components/TopHeader";

export default function Achievement() {
  return (
    <div className="achievement bg-[#0077ff]">
      <TopHeader>
        <h6 className="font-black text-md text-[#ffffff]">MILESTONES</h6>
        <h1 className="font-black py-1 text-3xl text-[#ffffff]">
          What sets me apart for your projects?
        </h1>
      </TopHeader>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-between m-5 md:m-10">
        <AchieveCard
          len="3800+"
          content="Figma ipsum component variant main layer. Hand."
        />

        <AchieveCard
          len="100%"
          content="Figma ipsum component variant main layer. Hand."
        />
        <AchieveCard
          len="3.5k"
          content="Figma ipsum component variant main layer. Hand."
        />

        <AchieveCard
          len="240+"
          content="Figma ipsum component variant main layer. Hand."
        />
      </div>
    </div>
  );
}
