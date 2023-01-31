import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
// import {faClose} from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faEdit} />
// import {books} from './../data-type';
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div 
    className="book-create"
    // className='bg-orange-400 p-3'
    >
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label >Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create </button>
        {/* {element} */}
      </form>
    </div>
  );
}

export default BookCreate;
