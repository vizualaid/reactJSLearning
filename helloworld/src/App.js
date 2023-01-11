// import logo from './logo.svg';
import './App.css';
// import card from './components/Card'
import Card from './components/Card';
import { Button, Idea } from './components/Button'
function App() {
 return(
  <div>
    <Card></Card>
    <Button></Button>
    <Idea></Idea>
  </div>
 ) 

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
