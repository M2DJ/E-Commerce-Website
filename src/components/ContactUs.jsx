import img1 from "../assets/React-Logo.webp";
import img2 from "../assets/Github-Logo.png";
import img3 from "../assets/LinkedIn-Logo.png";
import { useState, useEffect } from "react";

const ContactUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  if (windowWidth <= 320 || windowWidth <= 375) {
    return (
      <div className="p-3 flex justify-around">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-center">Contact Us!</div>
          <div className="flex justify-between">
            <div className="flex items-center mr-3">
              <img src={img2} className="h-7 max-w-12" />
              <a href="https://github.com/M2DJ" target="_blank">
                Github
              </a>
            </div>
            <div className="flex items-center">
              <img src={img3} className="h-8" />
              <a
                href="https://www.linkedin.com/in/saif-allah-mohamed/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} className="h-15 max-w-15" />
        </div>
      </div>
    );
  } else if (windowWidth <= 768) {
    return (
      <div className="p-3 flex justify-around">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-center">Contact Us!</div>
          <div className="flex justify-between">
            <div className="flex items-center mr-3">
              <img src={img2} className="h-7 max-w-12" />
              <a href="https://github.com/M2DJ" target="_blank">
                Github
              </a>
            </div>
            <div className="flex items-center">
              <img src={img3} className="h-8" />
              <a
                href="https://www.linkedin.com/in/saif-allah-mohamed/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} className="h-15 max-w-15" />
        </div>
      </div>
    );
  } else if (windowWidth >= 1024 && windowWidth <= 1440) {
    return (
      <div className="p-3 flex justify-around">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-center">Contact Us!</div>
          <div className="flex justify-between">
            <div className="flex items-center mr-3">
              <img src={img2} className="h-7 max-w-12" />
              <a href="https://github.com/M2DJ" target="_blank">
                Github
              </a>
            </div>
            <div className="flex items-center">
              <img src={img3} className="h-8" />
              <a
                href="https://www.linkedin.com/in/saif-allah-mohamed/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} className="h-15 max-w-15" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-3 flex justify-around">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-center">Contact Us!</div>
          <div className="flex justify-between">
            <div className="flex items-center mr-3">
              <img src={img2} className="h-34 max-w-34" />
              <a
                href="https://github.com/M2DJ"
                target="_blank"
                className="text-4xl ml-1"
              >
                Github
              </a>
            </div>
            <div className="flex items-center">
              <img src={img3} className="h-38" />
              <a
                href="https://www.linkedin.com/in/saif-allah-mohamed/"
                target="_blank"
                className="text-4xl"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} className="h-45 max-w-45" />
        </div>
      </div>
    );
  }
};

export default ContactUs;
