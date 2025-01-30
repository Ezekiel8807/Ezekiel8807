// Components
import TopHeader from "../components/TopHeader";
import ServiceCard from "../components/ServiceCard";

import ScrollerDiv from "./ScrollerDiv";

export default function Services() {
  const services = [
    {
      name: "Fullstack Development",
      disc: "End-to-end web development solutions using modern technologies, building both frontend and backend.",
    },
    {
      name: "Frontend Development (React.js)",
      disc: "Specialized in building responsive, dynamic, and interactive user interfaces using React.js.",
    },
    {
      name: "Backend Development (Node.js, Express.js, Django)",
      disc: "Creating robust, scalable server-side applications with Node.js, Express.js, and Django.",
    },
    {
      name: "Web Development (HTML, CSS, JavaScript, Tailwind, Bootstrap)",
      disc: "Building modern, mobile-first websites using the latest frontend technologies and frameworks.",
    },
    {
      name: "Database Management (MySQL, MongoDB)",
      disc: "Designing and managing databases to store and retrieve data efficiently for web applications.",
    },
    {
      name: "Cloud Hosting & Deployment",
      disc: "Deploying web applications to platforms like Heroku, Vercel, and Netlify for seamless scaling and performance.",
    },
    {
      name: "API Development & Integration",
      disc: "Building custom APIs or integrating third-party APIs to extend the functionality of web applications.",
    },
    {
      name: "Code Review & Debugging",
      disc: "Reviewing code for best practices, performance, and security improvements, along with troubleshooting and fixing issues.",
    },
    {
      name: "Training & Mentorship",
      disc: "Providing one-on-one or group coaching sessions for learners and professionals, with a focus on React, JavaScript, and full-stack development.",
    },
    {
      name: "Maintenance & Optimization",
      disc: "Offering ongoing support for web applications, including performance optimization and updates.",
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
