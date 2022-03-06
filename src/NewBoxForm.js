import React, { useState } from "react";
// import uuid from "uuid/v4";
import { v4 as uuidv4 } from 'uuid';

function NewBoxForm({addBox}) {

    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
      });

    const handleChange = (e) => {
        //update as stuff is entered (destructured)
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            //computed prop for key from attributes
            [name]: value
        }))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //pass data up to parent like a post req
        addBox({ ...formData, id: uuidv4(), key: uuidv4() });
        // setFormData(INITIAL_STATE)
        console.log("at handleSubmit()");
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="height">Height</label>
                <input
                onChange={handleChange}
                type="text"
                name="height"
                value={formData.height}
                id="height"
                />
            </div>
            <div>
                <label htmlFor="width">Width</label>
                <input
                onChange={handleChange}
                type="text"
                name="width"
                id="width"
                value={formData.width}
                />
            </div>
            <div>
                <label htmlFor="backgroundColor">Background Color</label>
                <input
                onChange={handleChange}
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                id="backgroundColor"
                />
            </div>
            <button id="newBoxButton">Add a new box!</button>
            </form>

            {`height ${formData.height}, width ${formData.width}, color ${formData.backgroundColor}, id ${formData.id}, key ${formData.key}`}
            <br /><br />
        </div>
      );


}

export default NewBoxForm