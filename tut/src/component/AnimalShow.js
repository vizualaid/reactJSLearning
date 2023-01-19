import React from "react";
import bird from "./svg/bird.svg";
import cat  from  "./svg/cat.svg";
import horse  from ",/svg/horse.svg";
import bird  from "";

const svgMap={
    horse,
    bird,
    cat,

}
export default function AnimalShow(props){
    // console.log(animals);
    return(
        <div>
            {/* {animals.length} */}
         {   props.animals.map((el)=>{
                //bird
                return <div>
                    <img src={svgMap[el]}>

                    </img>
                </div>
            }) 
        }
        </div>
    )
       
}