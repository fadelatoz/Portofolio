import ContactForm from "@/app/components/ContactForm";
import React from "react";

const PageExperience = () => {
  return (
    <div
      id="/experience"
      style={{ backgroundImage: "url(/image/bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        className="h-[90%] w-[100%] p-6 relative bg-cover bg-center rounded-xl"
      >
        <div className="text-center">
          <h1 className="font-semibold text-white text-[50px]">
            <span className="text-[30px] md:text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Experience{" "}
            </span>
          </h1>
        </div>

        <div className="border-y rounded-r p-5">
          <div >
            <span className="text-[9px] md:text-[18px] font-mono">Frontend Developer  -
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">
                PT.Astra International Tbk.
              </span>
            </span>
            <br></br>
            <span className="font-mono text-[9px] md:text-[18px]">June 2020 - Present</span>
          </div>

          <div className="pt-[20px]">
            <ul className="text-white text-[9px] md:text-[18px] font-mono">
              <li> - Create and develop the front view of the website based on the design of the UI/UX team that will be displayed and used by the user.</li>
              <li> - Create and develop content management system (CMS) to make it easier for the operations team to change or adjust the appearance of the website without having to know programming</li>
              <li> - Manage website, user experience, design, and bussines flow.</li>
              <li> - Connects to the api backend data which will be used to be displayed to the front visible to the user.</li>
              <li> - Developed and implemented React Components using NextJs.</li>
              <li> - Creating appropriate integration strategies with client – side components and APIs.</li>
              <li> - Troubleshooting layout and functional issues across multiple browsers and device.</li>
              <li> - Implementing and maintaining scalable front – end architecture utilizing latest javascript/typescript libraries and framework.</li>
              <li> - Utilizing industry best practices for mobile-first and responsive web design.</li>
              <li></li>
              <li></li>

            </ul>
          </div>

        </div>




      </div>
    </div>

  );
};

export default PageExperience;
