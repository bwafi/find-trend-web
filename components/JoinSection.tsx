import React from "react";

const JoinSection = () => {
  return (
    <section className="w-full bg-green flex flex-col justify-center items-center py-32 gap-10">
      <div className="w-8/12">
        <h1 className="text-center text-7xl font-bold font-efrra">
          Join us on email for <br /> <span className="text-[#87D322]">more trending topics</span>
        </h1>
      </div>
      <button className="py-3 px-8 bg-black rounded-full font-efrra font-bold text-white ">Join Now</button>
    </section>
  );
};

export default JoinSection;
