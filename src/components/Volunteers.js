import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const volunteersRef = collection(db, "volunteers");
      const querySnapshot = await getDocs(volunteersRef);
      const volunteersData = querySnapshot.docs.map((doc) => doc.data());
      setVolunteers(volunteersData);
    };

    fetchVolunteers();
  }, []);

  return (
    <div className="container p-8 mt-[5rem] mb-8 pb-8 mx-auto py-8">
      <h2 className=" font-bold  md:text-xl text-[1.8rem] underline mb-[8rem] md:pl-[18rem] text-[#9e9c9c] pl-[1rem]  md:text-[4rem] ">Our Volunteers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteers.map((volunteer) => (
          <div
            key={volunteer.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="rounded-full md:ml-[6rem] object-contain shadow-2xl ml-[2rem] p-10 w-full">   <img
              src={volunteer.url}
              alt={volunteer.name}
              className="w-32  rounded-full h-[10rem] "
            /></div>
         
            <div className="p-4 ml-5">
              <h3 className="text-xl font-bold mb-2">{volunteer.name}</h3>
              <p className="text-gray-700">{volunteer.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
