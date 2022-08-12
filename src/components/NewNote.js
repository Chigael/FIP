import { useState } from "react";

const NewNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    handleAddNote(text);
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
        <small>200 Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
