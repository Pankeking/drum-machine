import React from "react";
import { useSelector } from "react-redux";

function DisplayKeyComp() {

    const displayName = useSelector((state) => state.display.displayName);
    return (
        <div className="text text-start align-items-center mt-0">
            <p id="display">
                {displayName}
            </p>
        </div>
    )
}
export default DisplayKeyComp;