import AchieveCard from "../components/AchieveCard";
import TopHeader from "../components/TopHeader";

export default function Achievement() {
  return (
    <div className="achievement">
      <TopHeader>
        <h6 className="font-black text-md text-[#ffffff]">MILESTONES</h6>
        <h1 className="font-black py-1 text-3xl text-[#ffffff]">
          What sets me apart for your projects?
        </h1>
      </TopHeader>

      <div className="flex md:flex-row flex-col items-center justify-center">
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
