import React, { useState } from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import "./App.css";

export const App = () => {
  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "new note",
      content: "contents",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
};
