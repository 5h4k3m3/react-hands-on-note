import React from "react";
import "./Main.css";

export const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote, //to edit title and content in parallel
      [key]: value, //dynamic key
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <p className="noActiveNote">Select Note</p>;
  }
  return (
    <div className="appMain">
      <div className="appMainNoteEdit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="Edit Note"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="appMainNotePreview">
        <h1 className="previewTitle">{activeNote.title}</h1>
        <div className="markdownPreview">{activeNote.content}</div>
      </div>
    </div>
  );
};
