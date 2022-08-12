import Note from "./Note";
import NewNote from "./NewNote";

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}

      <NewNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
