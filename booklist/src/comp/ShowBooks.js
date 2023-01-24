import React from 'react'

export default function ShowBooks({books}){
    console.log(books);
    // const onEdtButtonPressed=(event)=>{
    //     console.log(id);
    // }
    // const onDelButtonPressed=(event)=>{
    //     console.log(id);
    // }
  return (


    <div>
        {
            books.map((book)=>{
                return <div>
                <h3>Title</h3>
                <div><h1>{book.title}</h1></div>
                <div>
                   <div>
                    <button 
                    // onClick={onEdtButtonPressed(book.id)}
                    >Edit</button>
                    <button 
                    // onClick={onDelButtonPressed(book.id)}
                    >Delet</button>
                   </div>
                </div>
                </div>
            })
        }
       
    </div>
  )
}

// export default ShowBooks
