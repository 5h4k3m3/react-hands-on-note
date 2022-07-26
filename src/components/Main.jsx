import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <div className="appMain">
      <div className="appMainNoteEdit">
        <input type="text" />
        <textarea id="" placeholder="Edit Note"></textarea>
      </div>
      <div className="appMainNotePreview">
        <h1 className="previewTitle">Title</h1>
        <div className="markdownPreview"></div>
        <div className="notePreview"></div>
      </div>
    </div>
  );
};
