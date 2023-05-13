import React from "react";
import KeyComp from "./KeyComp";

function KeysComp() {
    return (
        <div 
            className="me-4 col-6 row">
            <KeyComp keyName={"q"} />
            <KeyComp keyName={"w"} />
            <KeyComp keyName={"e"} />

            <KeyComp keyName={"a"} />
            <KeyComp keyName={"s"} />
            <KeyComp keyName={"d"} />
            
            <KeyComp keyName={"z"} />
            <KeyComp keyName={"x"} />
            <KeyComp keyName={"c"} />
        </div>
    )
}
export default KeysComp;