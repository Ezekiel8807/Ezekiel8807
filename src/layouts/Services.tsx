// Components
import TopHeader from "../components/TopHeader";
import ServiceCard from "../components/ServiceCard";

import ScrollerDiv from "./ScrollerDiv";

export default function Services() {
  const services: {
    name: string;
    disc: string;
  }[] = [
    {
      name: "Website / App DesignUX / UI Design",
      disc: "Creating Engaging Digital Experiences for Websites and Apps through UX/U",
    },
    {
      name: "Strategic Marketing and Creative Content",
      disc: "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },

    {
      name: "Strategic Marketing and Creative Content",
      disc: "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },

    {
      name: "Multivendor eCommerce Website Solutions",
      disc: "Unlocking the World of Multivendor eCommerce Websites",
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      disc: "Unlocking the World of Multivendor eCommerce Websites",
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      disc: "Unlocking the World of Multivendor eCommerce Websites",
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      disc: "Unlocking the World of Multivendor eCommerce Websites",
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      disc: "Unlocking the World of Multivendor eCommerce Websites",
    },
    {
      name: "Multivendor eCommerce Website Solutions",
      disc: "Unlocking the World of Multivendor eCommerce Websites",
    },
  ];
  return (
    <div id="services" className="mx-auto">
      <TopHeader>
        <h6 className="font-black text-md text-[#0077ff]">SERVICES</h6>
        <h1 className="font-black py-1 text-3xl text-[#222222]">
          Exploring My Design <span className="text-[#0077ff]">Skills</span>
        </h1>
        <p className="text-sm">
          I can transform your ideas into a distinctive web project that both
          inspires you and captivates your customers
        </p>
      </TopHeader>

      <ScrollerDiv>
        {services.map((service) => (
          <ServiceCard key={service.name} serviceCardData={service} />
        ))}
      </ScrollerDiv>

      <div className="flex flex-row w-[80%] mx-auto  justify-center"></div>
    </div>
  );
}
