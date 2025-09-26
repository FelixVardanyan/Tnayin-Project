import Title from "../../components/Title/Title";
import Saturn from "./saturn.jpeg";

const About = () => {
  return (
    <div className="flex justify-center mt-36">
      <div className="max-w-[600px] mx-auto">
        <div className="flex p-5 shadow-md shadow-gray-500">
          <div className="flex flex-col max-w-[60%]">
            <img src={Saturn} alt="saturn" className="w-full rounded-md" />
            <Title />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;