import React from "react";
import Button from "react-bootstrap/Button";

function DisplayKeyComp({ displayName }) {
    return (
        <div id="display" className="text text-center align-items-center pt-3 mt-3">
            <p >
                {displayName}
            </p>
        </div>
    )
}
export default DisplayKeyComp;