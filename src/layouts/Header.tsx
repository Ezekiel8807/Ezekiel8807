import { useState } from "react";
import menuBtn from "../assets/icons/menu-02.svg";
import Logo from "../components/Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#fff] relative md:p-3 p-5">
      <div className="md:flex justify-around items-center">
        <Logo
          logoBackground="bg-[#0077ff]"
          logoColor="#ffffff"
          logoTextColor={"text-black"}
        />

        {/* Mobile Menu Button */}
        <div className="absolute top-5 right-3 md:hidden">
          <img
            src={menuBtn}
            alt="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <nav className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="md:flex text-center my-3 items-center">
            {["Home", "About me", "Services", "Blog", "Contact Me"].map(
              (item, index) => (
                <li
                  key={index}
                  className="md:hover:bg-white hover:bg-[#0077ff] md:hover:text-[#0077ff] rounded-3xl p-2 my-1"
                >
                  <a
                    className="block font-bold text-sm"
                    href=""
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            {/* Chat Button */}
            <div className="hidden md:block md:ml-12">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.link/913d6g"
                className="block md:ml-12 w-[130px] bg-[#0077ff] p-2 rounded-3xl text-white"
                aria-label="Start a chat on WhatsApp"
              >
                let's chat
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
