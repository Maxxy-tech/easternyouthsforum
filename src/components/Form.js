
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
    <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
