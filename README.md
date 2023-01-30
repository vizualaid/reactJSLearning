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


npm (short for Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.
 npm helps manage and share the packages (libraries, frameworks, tools, etc.) that you use in your projects, and makes it easy to install and update packages from the online registry. It also helps you manage package dependencies, so that you can be sure that the packages you use are all compatible with each other. 

npm is  package manager
npm  -v
import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;

cd booklist
  npm start

bookcreate
bookList
npm install create-react-app -g
create-react-app<project_name>

files explained
https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3

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
    </div> */}
