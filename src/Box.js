import React from "react";

function Box({
    id,
    handleRemove,
    width = 4,
    height = 4,
    backgroundColor = "green"
}) {

    return (
        <div>
            <div
            style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
            }}
            />
            <button onClick={() => handleRemove(id)}>X</button>
        </div>
    )
}

export default Box;