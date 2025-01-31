import proPhoto from "../assets/a.jpg";

// icons
import downloadIcon from "../assets/icons/icon-download 1.svg";

//doc
import cv from "../assets/docs/cv3.pdf";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row m-5 md:m-10 items-center justify-center">
      <div className="text-center md:text-left">
        <div className="w-full md:w-[500px] md:mx-auto">
          <h4 className="font-semibold pt-5 pb-3 text-[#222222]">
            Welcome to my portfolio
          </h4>

          {/* presentation words */}
          <h1 className="font-black text-[30px] md:text-[40px]">
            Hi I’m
            <br />
            <span className="text-[35px] md:text-[50px] text-[#0077ff]">
              Ayebidun Ezekiel
            </span>
            <br />
            Frontend Developer
          </h1>
          <p className="md:w-[300px] text-sm text-[#222222] ">
            Collaborating with highly skilled individuals and delivering
            top-quality services.
          </p>

          {/* Hero action buttons */}
          <div className="flex-row md:flex justify-center md:justify-start items-center py-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.link/913d6g"
              className="block md:mr-[20px] md:w-[100px] my-3 p-3 md:p-[10px] font-black md:text-[14px] text-center bg-[#0077ff] rounded-[50px] text-white"
              aria-label="Start a chat on WhatsApp"
            >
              Hire Me!
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={cv}
              download
              className="block md:w-[200px] my-3 p-3 md:p-[10px] font-black md:text-[14px] text-center border border-5 border-[#0077ff] rounded-[50px] text-[#0077ff]"
              aria-label="Start a chat on Hire me"
            >
              Download CV
              <img
                className="inline ml-2 w-[16px]"
                src={downloadIcon}
                alt="downloadIcon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <img
          className="md:w-[400px] md:h-[400px] w-[300px] h-[300px]  mx-auto rounded-full border border-1"
          src={proPhoto}
          alt="profile-photo"
        />
      </div>
    </div>
  );
}
