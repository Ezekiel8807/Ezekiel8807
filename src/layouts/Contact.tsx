// components
import { useState } from "react";
import Button from "../components/Button";
import TopHeader from "../components/TopHeader";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [ischecked, setIschecked] = useState(false);

  const handleContactSubmit = () => {
    if (!name || !email || !subject || !message) alert("All fields required!");
    else alert("Submited");
  };

  return (
    <div id="contact" className="contact bg-[#0077ff]">
      <TopHeader>
        <h6 className="font-black text-md text-[#ffffff]">CONTACT ME</h6>
        <h1 className="font-black py-1 text-3xl text-[#ffffff]">
          Request Free Consultancy
        </h1>
      </TopHeader>

      <div className="flex flex-col md:flex-row p-5 md:p-10 gap-5">
        <div className="md:w-[50%] p-5 rounded-2xl bg-white">
          <h5 className="font-black text-[14px]">Hotline 24/7</h5>
          <h3 className="font-black text-[16px]">(+234) 8100196214</h3>

          <div className="mt-5">
            <p className="py-1 text-[12px]">
              <span className="text-[13px] font-black">Adress: </span>3 Olatunja
              Str, Sango ota, Ogun state, Nigeria.
            </p>
            <p className="py-1 text-[12px]">
              <span className="text-[13px] font-black">Email: </span>
              ayebidunezekiel@gmail.com
            </p>
            <p className="py-1 text-[12px]">
              <span className="text-[13px] font-black">fax: </span>
              (81)00196214
            </p>
            <p className="py-1 text-[12px]">
              <span className="text-[13px] font-black">Work Hour: </span>
              Mon - Sat: 9:00 - 18:00
            </p>
          </div>
        </div>

        <div className="md:w-[50%]">
          <form id="contactForm" className="grid grid-cols-2 gap-3" action="">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="rounded p-2 "
              type="text"
              name=""
              id=""
              value={name}
              placeholder="Name*"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="rounded p-2 "
              type="email"
              name=""
              id=""
              placeholder="Email Address*"
            />
            <input
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="rounded p-2 col-span-2"
              type="text"
              id=""
              placeholder="Enter Subject*"
            />
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="rounded p-2 col-span-2"
              rows={5}
              placeholder="How can i help you?"
            ></textarea>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-[12px] gap-5 px-5 md:px-10 mx-auto ">
        <div></div>
        <div className="mb-16 -mt-10">
          <div className="my-3 text-white">
            <input
              onChange={() => {
                setIschecked((v) => !v);
              }}
              checked={ischecked}
              className="mr-[5px] "
              type="checkbox"
            />
            By submitting, i’m agreed to the Terms & Conditons
          </div>
          <Button
            ischecked={ischecked}
            btnAction={handleContactSubmit}
            buttonStyle="w-[100%] md:w-[200px] rounded-3xl bg-[#00489A] text-[16px] font-black text-white p-3"
          >
            Request Now
          </Button>
        </div>
      </div>
    </div>
  );
}
