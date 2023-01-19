import React from 'react'
function formatDate(date) {
  return date.toLocaleDateString();
}

export default function Welcome(props) {
  return (
    <div>
      <h1>hi! {props.name}</h1>
      <h2>Welcome to College.</h2>

      <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />

        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>

    </div>
    
  )
}
