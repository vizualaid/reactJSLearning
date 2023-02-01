# reactJSLearning
.
#1.Libray Book List 
- Stores  the Title of books read in local database using Json server Api.
- Performs EDIT, DELETE, CREATE functions. 



![ezgif-3-2b40a422c8](https://user-images.githubusercontent.com/74894810/214788901-6e217184-61d4-4025-b00d-4f53ab6e7692.gif)

.
.

#2. React App Image Search using Unsplash Api 
- This project involves creating a search images app using React, the Unsplash API, and the useAxios hook.
- The app is styled using Tailwind CSS and has a skeleton loading page to improve the user experience.


![](https://github.com/vizualaid/reactJSLearning/blob/main/pic/fin.gif)
<!-- 

npm (short for Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.
 npm helps manage and share the packages (libraries, frameworks, tools, etc.) that you use in your projects, and makes it easy to install and update packages from the online registry. It also helps you manage package dependencies, so that you can be sure that the packages you use are all compatible with each other. 

npm is  package manager
npm  -v
cd booklist
  npm start
npm install create-react-app -g
create-react-app<project_name>

files explained
https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3
Render Multiple Elements inside ReactDOM.render()

ReactDOM.render(
[
<h1> Thapa Technical </h1>,
<p> Plz like and share to all </p>,
<h2> plz subscribe my channel </h2>,
],
document.getElementById("root")
);
React.fragment is fastest or <> </>
Inside fragment or enclosed tags
On v16 and above 
As a array [
jsx element ,
 jsx element 2,
 ]

Jsx expression using { var name + ” ” +var2 }
Template Literals in JSX
console.log(`my name is ${fname}`)

import React from 'react'
import ReactDOM from 'react-dom'
const name= 'Isha Kunwar';
const cdate=new Date().toLocaleDateString();
const ctime=new Date().toLocaleTimeString()
class App extends React.Component {
 render() {
   return (
     <>
      <h1>My name is {name}</h1>
      <p> todays date is {cdate} </p>
      <p>current Time is {ctime}</p>
     </>
   )
 }
}


ReactDOM.render(
 <App />,
 document.getElementById('container')
);



4 nested components come together to make the web
-root(app){
    side Nav 
    Main content 
    }
-header
-footer


* Two types of components
-stateless functional component

    funtion Welcome(props){
        return <h1>Hello, {props.name}</h1>;
    }
-statefull class component

    Class extending Component class

    Render method returning HTML
    class Welcome extends React.Component{
        return() {
            return <h1>Hello, {This.props.name}</h1>;
        }
    }
-Function Components are focus for biginners
--are literally js function
--they may accept some input properties(props) and return html that discribes the ui (jsx)


The file extension ( 

    function App() which 
    return html 
    {- wrraping div tag hadder img  etc} 
    exported from App as default  
    
    )
    as we make more complex app components inc.

   ncepts
   

   {/* 
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
    </div> */} -->
