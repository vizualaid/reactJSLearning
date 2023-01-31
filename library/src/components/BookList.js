import React, { useState } from 'react';
import BookShow from './BookShow';

import { useContext } from 'react';
import BooksContext from '../context/books';
import BookCreate from './BookCreate';

function BookList({ books, onDelete, onEdit }) {
  // const [number,setNumber] = useState(counter) for here
  const {counter, incrementCount}=useContext(BooksContext);
  
  const renderedBooks = books.map((book) => {
    return (

      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  const onHandleClick=()=>{
    incrementCount(counter);
    // setNumber(number+1); effect only here
  }
  return <div class="flex flex-wrap -mb-4 justify-around" >
    <div className="bg-orange-400 w-12 h-12 rounded text-right pr-1 text-white" >{counter}</div>
    <button onClick={onHandleClick} className="bg-orange-400 w-12 h-12 rounded ">
    click
    </button>
    {renderedBooks}
    </div>;
}

export default BookList;
