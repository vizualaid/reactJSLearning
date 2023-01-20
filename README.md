# reactJSLearning


npm (short for Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.
 npm helps manage and share the packages (libraries, frameworks, tools, etc.) that you use in your projects, and makes it easy to install and update packages from the online registry. It also helps you manage package dependencies, so that you can be sure that the packages you use are all compatible with each other. 

npm is  package manager
npm  -v
npx create-react-app helloworld

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