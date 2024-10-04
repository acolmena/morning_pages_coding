import React, { useState, useEffect } from "react";
import "../../App.css"; // Add styles here

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Cards = (props: CardProps) => {
  const [notes, setNotes] = useState<string[]>([]);
  const [singleNote, setSingleNote] = useState<string>("");

  // Handle form submit to store note
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (singleNote) {
      setNotes([...notes, singleNote]);
      setSingleNote(""); // Reset input after submission
    }
  };

  // Function to generate falling text effect while typing
  useEffect(() => {
    if (singleNote) {
      const lastChar = singleNote[singleNote.length - 1]; // Get the last character typed
      createFallingText(lastChar);
    }
  }, [singleNote]);

  // Function to create the falling text animation
  const createFallingText = (char: string) => {
    const fallingText = document.createElement("div");
    fallingText.className = "falling-note";
    fallingText.innerText = char;

    // Randomize the horizontal position of the falling text
    const randomLeft = Math.random() * window.innerWidth; // Random position across the width
    fallingText.style.left = `${randomLeft}px`;

    // Append the falling text to the body
    document.body.appendChild(fallingText);

    // Remove the falling text after the animation finishes
    setTimeout(() => {
      document.body.removeChild(fallingText);
    }, 3000); // Matches the animation duration (3s)
  };

  return (
    <div className="mb-5 max-w-sm bg-stone-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={props.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        {notes.map((note) => (
                <ul className="list-disc">
                    <li className="text-left transition ease-in-out delay-10 text-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 hover:font-bold duration-300 mb-3 mx-5 font-normal">
                    {note}
                    </li>
                </ul>
            ))}
      </div>
      <div className="mb-6 mx-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              id="large-input"
              value={singleNote}
              onChange={(e) => setSingleNote(e.target.value)} // Update the singleNote as user types
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-stone-500 focus:border-stone-500 dark:bg-stone-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
            />
          </div>
          <button
            type="submit"
            className="text-white rounded-full bg-stone-500 hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-stone-400 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cards;
