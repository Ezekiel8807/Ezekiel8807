import { useState } from "react";
import menuBtn from "../assets/icons/menu-02.svg";
import Logo from "../components/Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative p-5">
      <div className="md:flex md:px-16 justify-between items-center">
        <Logo
          logoBackground="bg-[#0077ff]"
          logoColor="#ffffff"
          logoTextColor={"text-black"}
        />

        {/* Mobile Menu Button */}
        <div className="absolute top-5 right-5 md:hidden">
          <img
            src={menuBtn}
            alt="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex flex-row absolute md:relative w-[200px] ms:w-[80%] md:w-[60%] bg-[#0077ff] md:bg-white rounded shadow-xl md:shadow-none p-2 md:p-0 top-16 md:top-0 right-3 justify-center md:justify-between items-center md:flex ${menuOpen ? "block" : "hidden"} `}
        >
          <ul className="md:flex text-center my-3 items-center">
            {["Home", "About me", "Services", "Projects", "Contact Me"].map(
              (item, index) => (
                <li
                  key={index}
                  className="md:hover:bg-white hover:bg-white md:hover:text-[#0077ff] rounded-3xl py-2 px-4 my-1"
                >
                  <a
                    className="block font-bold text-sm"
                    href={
                      index == 0
                        ? "/"
                        : index == 1
                          ? "/#about"
                          : index == 2
                            ? "/#services"
                            : index == 3
                              ? "/#projects"
                              : "/#contact"
                    }
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Chat Button */}
          <div className="hidden md:block md:ml-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.link/913d6g"
              className="block md:ml-12 w-[130px] bg-[#0077ff] p-2 rounded-3xl text-white text-center"
              aria-label="Start a chat on WhatsApp"
            >
              let's chat
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
