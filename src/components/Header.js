import { useState } from "react";
import {Link} from 'react-router-dom'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const paymentLink = 'https://your-flutterwave-payment-link';

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex  items-center justify-between flex-wrap bg-gray-800 p-6 md:gap-10">
      <div className="flex sm:justify-between items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Eastern Youths Forum
        </span>
      </div>
      <div className="bg-[#f35906] rounded-xl w-32 h-10 px-7 pt-2 pr-3  uppercase shadow-xl hover:bg-[#1c1a1a] hover:text-[#2e2a2a] transition-colors duration-300 text-[#2a0b0b] font-bold py-2   ">
        {" "}
        <div>
          <a href={paymentLink} target='_blank' rel='noreferrer'>
          <button className="uppercase  font-bold shadow-2xl">Donate</button></a></div>
      </div>
      <div className="block lg:hidden">
        
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:block w-full lg:flex-grow lg:w-auto`}
      >
        <div className=" text-lg lg:flex justify-between mx-8 px-8">
          <a href="/"
            className="block mt-4 lg:inline-block hover:text-[#282424] lg:mt-0 text-white  mr-4"
          >
            Home
          </a>
          <a href="/about"
            className="block mt-4 lg:inline-block hover:text-[#282424] lg:mt-0 text-white  mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block hover:text-[#282424] lg:mt-0 text-white "
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
