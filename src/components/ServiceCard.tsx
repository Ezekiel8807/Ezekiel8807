import { useState } from "react";
import ServiceIcon from "./ServiceIcon";

type serviceCardProbs = {
  serviceCardData: {
    name: string;
    disc: string;
  };
};

export default function ServiceCard(probs: serviceCardProbs) {
  const [selected, setSelected] = useState(false);

  function addStyle(): void {
    setSelected(true);
  }

  return (
    <div
      onMouseOver={addStyle}
      onMouseOut={() => {
        setSelected(false);
      }}
      className={`card w-[280px] md:w-[380px] inline-block m-5 p-5 ${selected ? "bg-[#0077ff]" : ""}`}
    >
      <ServiceIcon selected={selected} />
      <h1
        className={`font-black text-md my-1  ${selected ? "text-white" : ""} whitespace-normal`}
      >
        {probs.serviceCardData.name}
      </h1>
      <p
        className={`whitespace-normal text-sm ${selected ? "text-white" : ""}`}
      >
        {probs.serviceCardData.disc}
      </p>

      <p
        className={`font-black mt-3 text-[12px] ${selected ? "text-white" : "text-[#0077ff]"}`}
      >
        Learn more ➡️
      </p>
    </div>
  );
}
