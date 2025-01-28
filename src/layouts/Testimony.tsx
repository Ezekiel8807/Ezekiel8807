import TopHeader from "../components/TopHeader";
import ScrollerDiv from "./ScrollerDiv";
import TestimonyCard from "../components/TestimonyCard";

// images
import image1 from "../assets/a.jpg";

export default function Testimony() {
  const testimonies: {
    name: string;
    about: string;
    image: string;
  }[] = [
    {
      name: "Website / App DesignUX / UI Design",
      about:
        "Creating Engaging Digital Experiences for Websites and Apps through UX/U",
      image: `${image1}`,
    },
    {
      name: "Strategic Marketing and Creative Content",
      about:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
      image: `${image1}`,
    },

    {
      name: "Strategic Marketing and Creative Content",
      about:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
      image: `${image1}`,
    },

    {
      name: "Multivendor eCommerce Website Solutions",
      about: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${image1}`,
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      about: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${image1}`,
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      about: "Unlocking the World of Multivendor eCommerce Websites",
      image: `${image1}`,
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
        {testimonies.map((testimony) => (
          <TestimonyCard key={testimony.name} testimonyData={testimony} />
        ))}
      </ScrollerDiv>
    </div>
  );
}
