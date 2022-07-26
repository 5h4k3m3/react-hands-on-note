import React, { useState } from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import uuid from "react-uuid";
import "./App.css";

export const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

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

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
};
