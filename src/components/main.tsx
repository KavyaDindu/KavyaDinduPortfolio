import { TypeAnimation } from "react-type-animation";
import { IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover"
        src="src/assets/KavyaDindu.jpg"
        alt="Kavya Dindu"
      />
      <div className="absolute inset-0 bg-white/50 flex flex-col justify-center items-center">
        <div className="max-w-[700px] text-center mx-auto px-4">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Hi! I'm Kavya Dindu
          </h1>
          <h2 className="sm:text-3xl text-2xl pt-4 text-gray-700">
            <TypeAnimation
              sequence={[
                "I am a collaborator",
                2000,
                "I am a tech enthusiast",
                2000,
                "I am a product manager",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="pt-6 flex flex-col items-center space-y-4">
            <div className="bg-white bg-opacity-45 rounded-lg p-4 flex flex-col items-center space-y-4">
              <a
                href="https://www.linkedin.com/in/kavya-dindu-228805177/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center space-x-2"
              >
                <IconBrandLinkedin color="#0077B5" size={30} />
                <span className="sm:text-xl text-md text-gray-700">
                  LinkedIn
                </span>
              </a>
              <div className="flex items-center space-x-2">
                <IconMail size={24} />
                <span className="sm:text-xl text-md text-gray-700">
                  siridindu@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <IconPhone size={24} />
                <span className="sm:text-xl text-md text-gray-700">
                  (555)-555-5555
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
