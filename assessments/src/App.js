// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
// import comment from './components/Welcome';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function App() {
  return (
    <div className="App">
     
    <Welcome 
    name="Isha Kunwar" 
    date={comment.date}
    text={comment.text}
    author={comment.author}
    />

     {/* <Welcome name="Palak Singh" />
     <Welcome name="Gunjan Sharma" />
     <Welcome name="Sulagna Ghatak" /> */}
    </div>
  );
}

export default App;
