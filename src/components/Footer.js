import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="font-bold mb-2">Eastern Youths Forum</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nulla a eleifend ultricies, nisi nibh lacinia lorem, at
              euismod nulla nunc sit amet diam.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul className="list-reset">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Email: contact@easternyouthsforum.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Phone: +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Address: 123 Main St, Anytown, USA
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="font-bold mb-2">Follow Us</h3>
            <ul className="list-reset">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p>&copy; 2023 Eastern Youths Forum. All rights reserved.</p>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
