import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { togglePower } from "../features/powerSlice";
import { setVolume } from "../features/volumeSlice";

function SelectorComp() {

    const isOn = useSelector((state) => state.power.isOn)
    const dispatch = useDispatch();

    const handleClick = () => {
        isOn ? dispatch(setVolume(0)) : dispatch(setVolume(50));
        dispatch(togglePower())
    }

    return (
        <div className="styled-button h-25 w-25 mt-4 bg-warning">
            <p style={isOn ? {} : {marginLeft: "1em"}}>{isOn ? "ON" : "OFF"}</p>
            <Button 
                style={isOn ? {} : {marginLeft: "2em"}}
                onClick={handleClick}
                className="border border-shadow shadow-dark">
            </Button>
        </div>
    )
}
export default SelectorComp;