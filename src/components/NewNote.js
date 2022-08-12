import { useState } from "react";

const NewNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const characterCount = 500; //TO ADD CHARACTER COUNT LIMIT

  const handleChange = (event) => {
    // TO SET THE LIMIT AND PREVENT IT FOR ADDING CHARACTERS IF THE LIMITS IS REACHED
    if (characterCount - event.target.value.length >= 0)
      setText(event.target.value);
  };

  // SECTION TO ADD NOTE, AND CLEAR THE NOTE CARD
  const handleSave = () => {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note...."
        value={text}
        onChange={handleChange}
      ></textarea>

      <div className="note-footer">
        <small>{characterCount - text.length} Remaining</small>{" "}
        {/* DYNAMICALLY ADDED THE CHARACTER COUNT VAARIABLE */}
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
