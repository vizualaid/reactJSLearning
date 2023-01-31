// import "./components/1Rendering/Rendering.css"
import "./Rendering.css"
import { useState } from "react"
import { Icon } from "semantic-ui-react"
import NavBar from "../NavBar/NavBar"
const Rendering=()=>{
    // let fruits=[
    //     "Apple","Mango","Banana","Grapes"];
    const [fruitObjects, setFruitObjects] = useState([
                {
                    name:"Apple",
                    image:"https://media.istockphoto.com/id/1337613126/photo/red-apples-with-leaf-and-half-section-isolated-on-a-white.jpg?b=1&s=170667a&w=0&k=20&c=QD64f8JpiRDhnrI5n5Xkkjw2SmchXVKOzB1E0EHkIRA=",
                    weight:0.1,
                    price:45
        
                },
                {
                    name:"Mango",
                    image:"https://media.istockphoto.com/id/168370138/photo/mango.jpg?b=1&s=170667a&w=0&k=20&c=xraujw-bJkOOBKXcqtNaU65kDaBK2szprAGynpRhSIg=",
                    weight:0.1,
                    price:45
        
                },
                {
                    name:"Banana",
                    image:"https://media.istockphoto.com/id/1325054943/photo/banana-slice-isolated-cut-bananas-on-white-set-of-banana-slices-and-a-whole-on-white.jpg?b=1&s=170667a&w=0&k=20&c=SUCpMWxhMqQ75DZ760EvUfFe4QC8e8_PwtpeFx-VMB0=",
                    weight:0.1,
                    price:45
        
                },
                {
                    name: "Apple",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
                    price: 35,
                  },
                  {
                    name: "Banana",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
                    price: 12,
                  },
                  {
                    name: "Grapes",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
                    weight: 0.1,
                    price: 45,
                  },
                  {
                    name: "Pineapple",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
                    price: 200,
                  },

                ])
    // const RenderList=()=>{
    //     let renderedFruits=fruits.map((value,index)=>{
    //         return <li key={index} >{value}</li>
    //     })
    //     return <ul>{renderedFruits}</ul>

    // }
    // const renderList = () => 
    //     let renderedFruits = fruits.map((value, index) => {
    //       return <li key={index}>{value}</li>
    //     })
    //     return <ul>{renderedFruits}</ul>
    //   }
    const setLike = likedIndex => {
      let updatedValue = fruitObjects.map((fruit, index) =>
        likedIndex === index ? { ...fruit, like: !fruit.like } : { ...fruit }
      )
      setFruitObjects(updatedValue)
    }
    const renderFruits = () => {
      let renderedFruits = fruitObjects.map((value, index) => {
        return (
          <div className="card-container">
            <div className="image-container">
              <div className="icon-container" onClick={() => setLike(index)}>
                <Icon
                  name={value.like ? "heart" : "heart outline"}
                  color={value.like ? "red" : ""}
                ></Icon>
              </div>
              <img src={value.image} alt={"image-of-" + value.name}></img>
            </div>
            <div className="detail-container">
              <div className="name-container">{value.name}</div>
              <div className="price-container">{value.price}</div>
            </div>
            <div className="button-container"></div>
          </div>
        )
      })
      return <div className="cards-container">{renderedFruits}</div>
    }
    return <>{renderFruits()}</>
  }
    export default Rendering