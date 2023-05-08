import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-900  mt-[1rem] p-10 rounded-t-xl">
      <div className="max-w-7xl mx-auto py-16 sm:mt-10 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold underline text-gray-100 sm:text-4xl sm:mt-10 md:text-5xl lg:text-6xl">
            About Eastern Youths Forum
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Eastern Youths Forum is a non-profit organization that focuses on
            empowering young people in the Eastern region of Nigeria through
            education, mentorship, and community development projects. Our goal
            is to help young people realize their full potential and become
            leaders in their communities.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower young people in the Eastern region of Nigeria through
                education, mentorship, and community development projects.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg py-4 my-4 mx-4 shadow-xl overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To create a future where young people in the Eastern region of
                Nigeria have equal opportunities to thrive and become leaders in
                their communities.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Our Values
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Inclusivity</li>
                <li>Empathy</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
