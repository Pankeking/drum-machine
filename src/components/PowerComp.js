import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { togglePower } from "../features/powerSlice";

function PowerComp() {

    const isOn = useSelector((state) => state.power.isOn)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(togglePower())
    }

    return (
        <div className="styled-button mt-4 bg-warning">
            <p className="power-text">{isOn ? "ON" : "OFF"}</p>
            <Button 
                
                onClick={handleClick}
                className="border mt-5 border-shadow shadow-dark">
            </Button>
        </div>
    )
}
export default PowerComp;