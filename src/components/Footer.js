import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="font-bold mb-2">Eastern Youths Forum</h3>
            <p className="text-gray-400">
              Thank you for visiting the Eastern Youths Forum website. Together,
              we strive to empower and inspire young individuals across the
              region. Our dedicated team works tirelessly to create
              opportunities, foster leadership, and promote positive change.
              Join us in our mission to build a brighter future for Eastern
              youths. Together, we can make a lasting impact and create a world
              where every young person has the chance to thrive. Connect with us
              today and be a part of the Eastern Youths Forum movement.
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
                  Phone: +234 7031328477
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Address: Onitsha Anambra State Nigeria
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
