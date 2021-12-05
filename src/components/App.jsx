import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [newNote,...prevNotes];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={addNote} />
        {notes.map((note,index) => (
            <Note 
            key={index} 
            id={index}
            title={note.title} 
            content={note.content} 
            onDelete={deleteNote}
            />
        ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
