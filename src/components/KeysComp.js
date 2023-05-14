import React from "react";
import KeyComp from "./KeyComp";

function KeysComp() {
    return (
        <div 
            id="keys-comp"
            className="me-4 col-6 row">
            <KeyComp keyName={"Q"} />
            <KeyComp keyName={"W"} />
            <KeyComp keyName={"E"} />

            <KeyComp keyName={"A"} />
            <KeyComp keyName={"S"} />
            <KeyComp keyName={"D"} />
            
            <KeyComp keyName={"Z"} />
            <KeyComp keyName={"X"} />
            <KeyComp keyName={"C"} />
        </div>
    )
}
export default KeysComp;