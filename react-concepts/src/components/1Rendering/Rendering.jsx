// import "./components/1Rendering/Rendering.css"
import './Rendering.css';
const Rendering=()=>{
    // let fruits=[
    //     "Apple","Mango","Banana","Grapes"];
        let fruitObjects=[
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
        
                }
        ]
    // const RenderList=()=>{
    //     let renderedFruits=fruits.map((value,index)=>{
    //         return <li key={index} >{value}</li>
    //     })
    //     return <ul>{renderedFruits}</ul>

    // }
    const renderFruits=()=>{
        let renderFruits=fruitObjects.map((value,index)=>{
            return (
                <div class="cards-container">
                    <div className="image-container">
                    <img src={value.image} alt={"image-of-"+value.name}></img>
                    </div>
                    <div className="bottom-container">
                        <div className="name-container">
                        {value.name}
                        </div>
                        <div className="price-container">
                        {value.price}
                        </div>

                    </div>
                </div>
            // <li key={index}>{value.name} {value.price}</li>
            
            )
        })
        return <ul>{renderFruits}</ul>

    }
    return(<div>
        {/* {RenderList()} */}
        {renderFruits()}
        
        </div>)
}
export default Rendering