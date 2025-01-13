import proPhoto from "../assets/a.jpg";
import Button from "../components/Button";

// icons
import downloadIcon from "../assets/icons/icon-download 1.svg";

const hireButtonStyle = {
  backgroundColor: "#0077ff",
  padding: "5px",
  width: "100px",
  fontSize: "14px",
  color: "#ffffff",
  fontWeight: "bold",
  marginRight: "20px",
  borderRadius: "50px",
};

const downloadButtonStyle = {
  padding: "5px",
  width: "200px",
  fontSize: "14px",
  color: "#0077ff",
  fontWeight: "bold",
  border: "1px solid #0077ff",
  borderRadius: "50px",
};

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="p-2 text-center md:text-left">
        <div className="w-[300px] md:w-[500px] md:mx-auto">
          <h4 className="font-semibold py-2 text-[#222222]">
            Welcome to my portfolio
          </h4>
          <h1 className="font-black l py-2 md:text-[40px]">
            Hi I’m
            <br />
            <span className="font-black md:text-[50px] text-[#0077ff]">
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
            <Button buttonStyle={hireButtonStyle}>Hire Me!</Button>
            <Button buttonStyle={downloadButtonStyle}>
              Download CV
              <img
                className="inline ml-2 w-[16px]"
                src={downloadIcon}
                alt="downloadIcon"
              />
            </Button>
          </div>
        </div>
      </div>
      <div className=" p-2">
        <img
          className="md:w-[400px] md:h-[400px] w-[250px] h-[250px]  mx-auto rounded-full border border-1"
          src={proPhoto}
          alt="profile-photo"
        />
      </div>
    </div>
  );
}
