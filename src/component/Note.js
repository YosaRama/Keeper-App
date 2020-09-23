import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function submitDelete(event) {
    props.onDelete(props.id);
    event.preventDefault();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={submitDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
