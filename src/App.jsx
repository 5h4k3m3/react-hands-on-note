import React, { useState } from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import uuid from "react-uuid";
import "./App.css";

export const App = () => {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "contents",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
      />
      <Main />
    </div>
  );
};
