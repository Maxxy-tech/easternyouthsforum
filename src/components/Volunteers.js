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
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Our Volunteers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteers.map((volunteer) => (
          <div
            key={volunteer.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={volunteer.url}
              alt={volunteer.name}
              className="w-full h-30 sm:h-40 md:h-48 lg:h-56 object-contain center "
            />
            <div className="p-4">
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
