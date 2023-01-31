// // import logo from './logo.svg';
// import { WorkingWithMultipleStates } from './components/WorkingWithMultipleStates';
// import './App.css';
// import { LiftingTheStateUp } from './LiftingTheStateUp/LiftingTheStateUp';
// import { UnControlledComponent } from './components/UnControlledComponent/UnControlledComponent';
// // import {ClassComp}
// import { Validation } from "./components/Validation/Validation"
// function App() {
//   return (
//     <div className="App">
//      /* <LiftingTheStateUp></LiftingTheStateUp>
//      <WorkingWithMultipleStates></WorkingWithMultipleStates>
//     <UnControlledComponent></UnControlledComponent> */
//      <Validation></Validation> 
//           {/* // <ClassComponent></ClassComponent>     */}
//     </div>
//   );
// }
import NavBar from "./components/NavBar/NavBar"
import Cards from "./components/Cards/Cards"
import "semantic-ui-css/semantic.min.css"
import Login from "./components/Login/Login"


// import ClassComponent from "./components/ClassComponent/ClassComponent"
// import { WorkingWithMultipleStates } from "./components/Working With Multiple States/WorkingWithMultipleStates"
// import WorkingWithMultipleStatesClass from "./components/Working With Multiple States/WorkingWithMultipleStatesClass"
// import { LiftingTheStateUp } from "./components/LiftingTheStateUp/LifitingTheStateUp"
// import { Validation } from "./components/Validation/Validation"
import { useReducer } from "react"
import { Grid } from "semantic-ui-react"
const initalState = {
  fruitObjects: [
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
      isLiked:false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
      isLiked:false,
      quantity: 0,
    },],
  carts: [],
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let updatedValue = state.fruitObjects.map((value, index) =>
        index === action.value ? { ...value, quantity: value.quantity + 1 } : { ...value }
      )
      return {
        ...state,
        fruitObjects: updatedValue,
        carts: [...state.carts, action.value],
      }
    }

    default:
      return state
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  return (
    
    <Grid>
      <Grid.Row>
        <Grid.Column>
          
          <NavBar carts={state.carts}></NavBar>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Cards
           
            list={state.fruitObjects}
            addItemToCart={listIndex => {
              dispatch({ type: "ADD_TO_CART", value: listIndex })
            }}
          ></Cards>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column>
      <Login></Login>
      </Grid.Column>
      </Grid.Row>
  </Grid>
  )
}

export default App
