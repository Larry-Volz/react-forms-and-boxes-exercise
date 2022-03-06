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
        </div>
    )
}

export default Box;