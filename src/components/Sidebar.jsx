import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ onAddNote, notes }) => {
  return (
    <div className="appSidebar">
      <div className="appSidebarHeader">
        <h1>Note</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="appSidebarNotes">
        {notes.map((note) => (
          <div className="appSidebarNote">
            <div className="sidebarNoteTitle">
              <strong>{note.title}</strong>
              <button>Delete</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
