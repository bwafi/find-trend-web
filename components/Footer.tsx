import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-4 flex items-center justify-between">
      <div className="flex ml-3 cursor-pointer lg:justify-center items-center lg:w-2/12 w-1/4">
        <Image src="./icon/find-trend-black.svg" alt="Fint Trend" width={40} height={40} />
        <h1 className="font-efrra font-bold text-2xl ml-2 hidden md:block">Findtrend</h1>
      </div>

      <ul className="flex gap-4 mr-5">
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Contact Us</li>
        <li>Careers</li>
      </ul>
    </footer>
  );
};

export default Footer;
