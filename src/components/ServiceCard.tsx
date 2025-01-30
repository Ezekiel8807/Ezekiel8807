import { useState } from "react";
import ServiceIcon from "./ServiceIcon";

type serviceCardProbs = {
  serviceCardData: {
    iconType?: string;
    name: string;
    disc: string;
  };
};

export default function ServiceCard(probs: serviceCardProbs) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onMouseOver={() => setSelected(true)}
      onMouseOut={() => setSelected(false)}
      className={`card group w-[280px] md:w-[380px] p-5 ${selected && "hover:bg-[#0077ff]"}`}
    >
      <ServiceIcon selected={selected} iconStyle="" />

      <h1
        className={`font-black text-2xl mt-3 ${selected && "group-hover:text-white"}`}
      >
        {probs.serviceCardData.name}
      </h1>
      <p className={`${selected && "group-hover:text-white"} my-3 text-md `}>
        {probs.serviceCardData.disc}
      </p>

      <small className={`${selected && "group-hover:text-white"} text-sm`}>
        Learn more ➡️
      </small>
    </div>
  );
}
