import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BooksContext from './context/books';
import { Provider } from './context/books';
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    //wrapped the app in this, app.js is child now. so everthing that is inside 
    //booksContext is with app
    <><Provider value={10}>
    <App />
    </Provider></>
   



);
