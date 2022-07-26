import React from "react";
import "./Sidebar.css";

export const Sidebar = ({
  onAddNote,
  onDeleteNote,
  notes,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="appSidebar">
      <div className="appSidebarHeader">
        <h1>Note</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="appSidebarNotes">
        {notes.map((note) => (
          <div
            className={`appSidebarNote ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebarNoteTitle">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
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
