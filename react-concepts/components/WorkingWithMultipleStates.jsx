// import {useState }from "react"
// export const WorkingWithMultipleStates=()=>{
//     const[name,setName]=useState("")
//     const[institute, setInstitute]=useState("")
//     const[events, setEvents]=useState([])
//     const[dat,setData]=useState([])
//     let eventOption=[
//         {
//             key:"Dancing",
//             value:"dancing",
//         },
//         {
//             key:"Drama",
//             value:"drama",
//         },
//         {
//             key:"Coding",
//             value:"coding",
//         },
//     ]
//     const handelSubmit=()=>{
//         event.defaultPrevented();
//         const newData={name,institute,events}
//         console.log(newData)
//         setData(prevState=>{
//             return[...prevState,newData]
//         })
//     }
//     return(
//         <div>
//             <form onSubmit={handelSubmit}>
//                 <div>
//                     <lable>"Enter Your Name: "</lable>
//                     <input
//                     type="text" placeholder="Full Name"
//                     value={name}
//                     onChange={event=>{
//                         setName(event.target.value)
//                     }}
//                     ></input>

//                 </div>
//                 <div>
//                     <lable>"Enter Your Institute Name: "</lable>
//                     <input placeholder="Institute Name"
//                     value={institute}
//                     onChange={function(event){
//                         setInstitute(event.target.value)
//                     }}
//                     ></input>
//                 </div>
//                 <div>
//                     <lable>"Select Event : "</lable>
//                     <select> 
//                         multiple onchange={
//                         event=>{
//                             let values=[...event.target.selectedOption].map(option=>option.value)
//                             console.log(values)
//                         }
                        
//                     }
//                         {   eventOption.map(option=>(
//                             <option key={option.key} value={option.value}>
//                                 {option.value}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <button type="submit">Submit Form</button>
//                 </div>
//             </form>
//         </div>
            
//     )
// }