// logo images
import jqueryImg from "../assets/logo/logo-1.svg";
import wordpressImg from "../assets/logo/logo-2.svg";
import lessImg from "../assets/logo/logo-3.svg";
import saasImg from "../assets/logo/logo-5.svg";
import sportifyImg from "../assets/logo/logo-6.svg";

export default function Tools() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center p-5 bg-[#f8f8f8]">
      <img className="py-3 w-[200px]" src={jqueryImg} alt="" />
      <img className="py-3 w-[200px]" src={wordpressImg} alt="" />
      <img className="py-3 w-[200px]" src={lessImg} alt="" />
      <img className="py-3 w-[200px]" src={saasImg} alt="" />
      <img className="py-3 w-[200px]" src={sportifyImg} alt="" />
    </div>
  );
}
