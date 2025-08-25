import img1 from "../assets/React-Logo.webp";
import img2 from "../assets/Github-Logo.png";
import img3 from "../assets/LinkedIn-Logo.png";

const ContactUs = () => {
  return (
    <div className="p-3 flex justify-around">
      <div className="flex flex-col">
        <div className="text-xl font-bold text-center">Contact Us!</div>
        <div className="flex justify-between">
          <div className="flex items-center mr-3">
              <img src={img2} className="h-7 max-w-12"/>
              <a href="https://github.com/M2DJ" target="_blank">
                Github
              </a>
          </div>
          <div className="flex items-center">
              <img src={img3} className="h-8"/>
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
};

export default ContactUs;
