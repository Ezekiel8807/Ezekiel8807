import Logo from "../components/Logo";

// icons
import facebookIcon from "../assets/icons/facebook icon.svg";
import twitterIcon from "../assets/icons/Group 7.svg";
import linkinIcon from "../assets/icons/icon linkedin.svg";
import emailIcon from "../assets/icons/icon email.svg";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row p-5 justify-center bg-[#0077ff]">
        <div className="flex flex-col md:flex-row items-center md:w-[70%]">
          <Logo
            logoBackground="bg-white"
            logoColor="#0077ff"
            logoTextColor="text-white"
          />
          <p className="text-sm py-3 md:ml-5 text-white md:text-[#79B2F2]">
            © Copyright 2025. All Rights Reserved
          </p>
        </div>

        {/* social handles */}
        <div className="flex flex-row justify-center items-center md:w-[20%]">
          <h3 className="text-white md:text-[#79B2F2]">Follow: </h3>
          <div className="flex flex-row justify-end">
            <a
              className="mx-1 block"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100077701836062/"
            >
              <img src={facebookIcon} alt="facebookIcon" />
            </a>
            <a
              className="mx-1 block"
              target="_blank"
              href="https://x.com/AyebidunEzekiel/"
            >
              <img src={twitterIcon} alt="twitterIcon" />
            </a>
            <a
              className="mx-1 block"
              target="_blank"
              href="https://www.linkedin.com/in/Ezekiel8807/"
            >
              <img src={linkinIcon} alt="linkinIcon" />
            </a>
            <a
              className="mx-1 block"
              target="_blank"
              href="mailto:ayebidunezekiel@gmail.com/"
            >
              <img src={emailIcon} alt="emailIcon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
