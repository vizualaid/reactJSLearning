import React from 'react'
import {useState} from 'react';

// import { render } from 'react-dom/cjs/react-dom.production.min';
export default function SearchBar(){
    const [term,setTerm]=useState('');
    const onHandelSubmit=(event)=>{
        event.preventDefault();
       
        event.preventDefault();
         console.log("form is Submitted");
            }
            const onHandleChange=(event)=>{  
                setTerm(event.target.value);
            }  
            return(
                <div>
                    <h1>
                        Seach Pics
                    </h1>
                    <form onSubmit={onHandelSubmit}>
                        <input></input>
                    </form>
                </div>
            )
}