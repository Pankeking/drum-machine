import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

function DisplayKeyComp() {

    const displayName = useSelector((state) => state.display.displayName);
    return (
        <div id="display" className="text text-center align-items-center pt-3 mt-3">
            <p >
                {displayName}
            </p>
        </div>
    )
}
export default DisplayKeyComp;