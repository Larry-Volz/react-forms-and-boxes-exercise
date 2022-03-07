import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


function BoxList(){

//DO: handleRemove

    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox)=> {
        setBoxes(boxes => [...boxes, {...newBox}])
        console.log(boxes);
    }

    //DO handleRemove

    const handleRemove = boxId => {
        setBoxes(boxes => boxes.filter(box => box.id !==boxId));
    }


    const toRender = boxes.map(box => (
            <Box
                key={box.key}
                id={box.id}
                width={box.width}
                height={box.height}
                handleRemove={handleRemove}
                backgroundColor={box.backgroundColor} 
            />
        ));
        
    return (
        <div>
            <p>My Boxes</p>
            <NewBoxForm addBox={addBox} handleRemove={handleRemove}/>
            { toRender }
        </div>
    )

}




export default BoxList;