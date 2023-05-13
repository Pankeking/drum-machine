import React from "react";
import { useSelector } from "react-redux";

function DisplayKeyComp() {

    const displayName = useSelector((state) => state.display.displayName);
    return (
        <div id="display" className="text text-start align-items-center mt-0">
            <p >
                {displayName}
            </p>
        </div>
    )
}
export default DisplayKeyComp;