import logo from "../assets/air-balloon-large.svg";
import menuBtn from "../assets/icons/menu-02.svg";

// type headerProbsType = {
//   e: React.ReactNode;
// };

export default function Header() {
  return (
    <header className="w-screen bg-[#fff] relative md:p-3 p-5">
      <div className="md:flex justify-around items-center">
        {/* logo design structure */}
        <div className="flex">
          <div className="img-box">
            <img className="bg-blue" src={logo} alt="logo" />
          </div>

          <p className="logo-label text-2xl ms-1 font-black">A.E</p>
        </div>

        {/* mobile menu button */}
        <div className="absolute top-5 right-3 md:hidden">
          <img src={menuBtn} alt="menuBtn" />
        </div>

        {/* navigation links */}
        <nav className="">
          <ul className="md:flex text-center my-3 hidden md:inline-block items-center ">
            <li className="md:hover:bg-white hover:bg-[#0077ff] md:hover:text-[#0077ff] rounded-3xl p-2 my-1">
              <a className="block font-bold text-sm" href="">
                Home
              </a>
            </li>
            <li className="md:hover:bg-white hover:bg-[#0077ff] md:hover:text-[#0077ff] rounded-3xl p-2 my-1">
              <a className="block font-bold text-sm" href="">
                About me
              </a>
            </li>
            <li className="md:hover:bg-white hover:bg-[#0077ff] md:hover:text-[#0077ff] rounded-3xl p-2 my-1">
              <a className="block font-bold text-sm" href="">
                Services
              </a>
            </li>
            <li className="md:hover:bg-white hover:bg-[#0077ff] md:hover:text-[#0077ff] rounded-3xl p-2 my-1">
              <a className="block font-bold text-sm" href="">
                Blog
              </a>
            </li>
            <li className="md:hover:bg-white hover:bg-[#0077ff] md:hover:text-[#0077ff] rounded-3xl p-2 my-1">
              <a className="block font-bold text-sm" href="">
                Contact Me
              </a>
            </li>

            {/* let chat button */}
            <div className="md:ml-12">
              <button className="md:ml-12 w-[120px] bg-[#0077ff] p-2 rounded-3xl text-white">
                let's chat
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
