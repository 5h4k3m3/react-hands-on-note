import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ onAddNote }) => {
  return (
    <div className="appSidebar">
      <div className="appSidebarHeader">
        <h1>Note</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="appSidebarNotes">
        <div className="appSidebarNote">
          <div className="sidebarNoteTitle">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Note</p>
          <small>Update at xxxx</small>
        </div>
      </div>
    </div>
  );
};
