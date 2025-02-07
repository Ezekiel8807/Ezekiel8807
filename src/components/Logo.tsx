type logoProbs = {
  logoBackground: string;
  logoColor: string;
  logoTextColor?: string;
};

export default function Logo({
  logoBackground,
  logoColor,
  logoTextColor,
}: logoProbs) {
  return (
    <a href="/">
      <div className="flex ms:mx-5 md:mx-10">
        <div
          className={`w-[30px] h-[30px] p-[5px] rounded-[50px] ${logoBackground}`}
        >
          <svg
            className="w-[100%] h-[100%]"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3.75C11.7868 3.75 6.75 7.36523 6.75 12.75C6.75 16.8284 11.1394 24.8337 13.7409 27.75H22.2591C24.8606 24.8337 29.25 16.8284 29.25 12.75C29.25 7.36523 24.2132 3.75 18 3.75Z"
              stroke={logoColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 3.75C14.272 3.75 11.25 7.36523 11.25 12.75C11.25 16.8284 13.8836 24.8337 15.4445 27.75"
              stroke={logoColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 3.75C21.728 3.75 24.75 7.36523 24.75 12.75C24.75 16.8284 22.1164 24.8337 20.5555 27.75"
              stroke={logoColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 3.75C16.7573 3.75 15.75 7.36523 15.75 12.75C15.75 16.8284 16.6279 24.8337 17.1482 27.75"
              stroke={logoColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 3.75C19.2427 3.75 20.25 7.36523 20.25 12.75C20.25 16.8284 19.3721 24.8337 18.8518 27.75"
              stroke={logoColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.5 27.4775V32.25H13.5V27.4775"
              stroke={logoColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className={`text-2xl ms-1 font-black ${logoTextColor}`}>Ezefizzy</p>
      </div>
    </a>
  );
}
