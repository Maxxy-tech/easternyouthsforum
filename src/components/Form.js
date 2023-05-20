
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function Form() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        author,
        content,
      });
      console.log("Document written with ID: ", docRef.id);
      setAuthor("");
      setContent("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form className="max-w-3xl mx-auto bg-[#3b3b3c]" onSubmit={handleSubmit}>
      <div className=" p-10">
        <label htmlFor="author" className="block text-gray-800 italic p-4 font-semibold text-[1.5rem] mb-2">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className=" p-8">
        <label htmlFor="content" className="block text-gray-800 italic text-[1.5rem] font-semibold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-center p-4 mb-8">
        <button
          type="submit"
          className="bg-[#020419ed] hover:bg-blue-700 text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
