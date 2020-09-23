import { useState } from "react";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  const [Expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(Note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expanded() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {Expand && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={Note.title}
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={expanded}
          name="content"
          placeholder="Take a note..."
          rows={Expand ? 3 : 1}
          value={Note.content}
        />

        {Expand && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
