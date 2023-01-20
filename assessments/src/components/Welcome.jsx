import React, { useState } from "react";


export default function Welcome(props) {
  const [name, setName] = useState(props.name);
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  return (
    <div  >
      
      
      <h1>Hi! <span>{name}</span></h1>
      <h2>Welcome to College.</h2>
      <div class="seller-auth">
      <div  class="login" >
        <form class="common-form" onSubmit={handleSubmit} id='style'>
      {/* <label> 
        Name
      </label> */}
        <input
          class="form-input"
          type="text"
          placeholder={props.name}
          value={name}
          onChange={e => setName(e.target.value)}
        />
     
      <input class="form-button" type="submit" value="Log In" />
    </form>
    </div>
    </div>
    </div>
    
  )
}
Welcome.defaultProps={name:"Student Name"}

// prototype={PropTypes:String}