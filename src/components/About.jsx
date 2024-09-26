import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[4.2vw] leading-[4.1vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-20">
        <div className="w-1/2 ">
          <h1 className="font-['Neue_Montreal'] text-7xl">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 py-5  bg-zinc-900 mt-10 rounded-full uppercase font-semibold text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[36vw]">
          <img className="rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
