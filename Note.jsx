import React from "react";
import { notes } from "./notes";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      {
        <ul>
          {notes.map((note) => (
            <li key={note.key}>
              <h1>{note.title}</h1>
              <p>{note.content}</p>

              <h1>{props.title}</h1>
              <p>{props.content}</p>
              <button onClick={handleClick}>DELETE</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Note;
