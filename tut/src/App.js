// // import 'bulma/css/bulma.css';
// import ProfileCard from './ProfileCard';
// import AlexaImage from './images/alexa.png';
// import CortanaImage from './images/cortana.png';
// import SiriImage from './images/siri.png';

import AnimalShow from "./component/AnimalShow";

// function App() {
//   return (
//     <div>
//       <section className="hero is-primary">
//         <div className="hero-body">
//           <p className="title">Personal Digital Assistants</p>
//         </div>
//       </section>

//       <div className="container">
//         <section className="section">
//           <div className="columns">
//             <div className="column is-4">
//               <ProfileCard
//                 title="Alexa"
//                 handle="@alexa99"
//                 image={AlexaImage}
//                 description="Alexa was created by Amazon and helps you buy things."
//               />
//             </div>
//             <div className="column is-4">
//               <ProfileCard
//                 title="Cortana"
//                 handle="@cortana32"
//                 image={CortanaImage}
//                 description="Cortana was made by Microsoft. Who knows what it does?"
//               />
//             </div>
//             <div className="column is-4">
//               <ProfileCard
//                 title="Siri"
//                 handle="@siri01"
//                 image={SiriImage}
//                 description="Siri was made by Apple and is being phased out"
//               />
//             </div>
//             <div className="column is-5">
//               <ProfileCard
//                 title="Siri"
//                 handle="@sjac01"
//                 image={SiriImage}
//                 description="j was made by jac and is being phased out"
//               />
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default App;
//2
import { useState } from "react";
const getRandomAnimals=()=>{
  const animals=['cat','dog','bird']
}
console.log(getRandomAnimals());
function App()
{
  const[number,setAnimals]=useState([]);
  const handelClick=()=>{
    setAnimals([...AnimalShow,getRandomAnimals()]);
    return(
      <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div> 
    )
  }
}

export default App;