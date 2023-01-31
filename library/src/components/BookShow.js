import { useState } from 'react';
import BookEdit from './BookEdit';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {faClose} from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faEdit} />
const e2= <FontAwesomeIcon icon={faClose} />
// ReactDOM.render(element, document.body)


function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onEdit={onEdit} book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button  className="pr-1" onClick={handleEditClick}>
        {element}{/* <i class="fa fa-pencil-square-o" aria-hidden="true" onClick={handleEditClick} >edit</i> */}
        </button>
        {/* <i class="fa fa-edit">dance</i> */}
        <button className="pr-1" onClick={handleDeleteClick}>
          {e2}
        </button>
      </div>
    </div>
  );
}

export default BookShow;
