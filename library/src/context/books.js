import {createContext} from 'react'
import { useState} from 'react';
const BooksContext=createContext();
function Provider({children}){
    
        const [counter,setCounter]=useState(10);
             const valueToShare={
                counter,
                incrementCount:()=>{
                    setCounter(counter+1);
                }
             }
             return(
                
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
             )
      
    
}
export {Provider}
export default BooksContext;