import React from "react";
import "./Main.css";

export const Main = ({ activeNote }) => {
  if (!activeNote) {
    return <p className="noActiveNote">Select Note</p>;
  }
  return (
    <div className="appMain">
      <div className="appMainNoteEdit">
        <input type="text" />
        <textarea id="" placeholder="Edit Note"></textarea>
      </div>
      <div className="appMainNotePreview">
        <h1 className="previewTitle">{activeNote.title}</h1>
        <div className="markdownPreview">{activeNote.content}</div>
      </div>
    </div>
  );
};
