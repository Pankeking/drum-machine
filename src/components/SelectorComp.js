import React from "react";
import Button from "react-bootstrap/Button";

function SelectorComp({ selecName }) {
    return (
        <div className="h-25 w-50 bg-warning">
            <p>{selecName}</p>
            <Button className="border border-shadow shadow-dark">
            </Button>
        </div>
    )
}
export default SelectorComp;