import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


function BoxList(){

//DO: ADD UUID, do handleRemove
const INITIAL_STATE = [
        {   
            key:0,
            id:0,
            handleRemove: "put function here",
            width: 6,
            height: 6,
            backgroundColor: "red"
        }
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE);
    // console.log(boxes);
    // ({id, handleRemove, width, height, backgroundColor} = boxes);

    const toRender = boxes.map(box => (
            <Box
                key={box.key}
                id={box.id}
                width={box.width}
                height={box.height}
                handleRemove={box.handleRemove}
                backgroundColor={box.backgroundColor} 
            />
        ));
        
    return (
        <div>
            <p>My Boxes</p>
            <NewBoxForm />
            { toRender }
        </div>
    )

}




export default BoxList;