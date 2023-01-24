// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ShowBooks from './comp/ShowBooks';
function App() {
  const [title,setTitle]=useState('');
  const [books,setBooks]=useState([]);
  const onHandleChange=(event)=>{
    // const onHandleChange
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  const onHandleSubmit=(event)=>{
    event.preventDefault();
    console.log("Form Submitted");
    const updatedBooks=[...books,{
      id:Math.floor(Math.random()*9999),
      title:title
    }]
    setBooks(updatedBooks);
    
  }
  console.log(books);
  return (
    <div className="App">
      <form onSubmit={onHandleSubmit}>
        <h1>Enter Book Name</h1>
        <input onChange={onHandleChange}/>
        <div>
        <button>Create</button>
        </div>
      </form>
      <ShowBooks books={books} />
    </div>
  );
}

export default App;
