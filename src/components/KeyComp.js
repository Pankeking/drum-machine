import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayName } from "../features/displaySlice";
import { setPressedButton, clearPressedButton } from "../features/buttonSlice";


function KeyComp({ keyName }) {

    const [isPressed, setIsPressed] = useState(false);
    const [bgColor,setBgColor] = useState("gray");
    const pressedButton = useSelector((state) => state.button.pressedButton);
    const dispatch = useDispatch();

    

    const audios = {
        q: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", name: "Heater-1"},
        w: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", name: "Heater-2"},
        e: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", name: "Heater-3"},
        a: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", name: "Heater-4_1"},
        s: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", name: "Heater-6"},
        d: {src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", name: "Dsc_Oh"},
        z: {src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", name: "Kick_n_Hat"},
        x: {src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", name: "RP4_KICK_1"},
        c: {src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", name: "Cev_H2"},
    }

    const generateRandomColor = () => {
        return '#'+ Math.floor(Math.random() * 16777215).toString(16);
    } 

    const handleClick = () => {
        const audio = new Audio(audios[keyName].src);
        audio.currentTime = 0;
        //setIsPressed(!isPressed);
        dispatch(setPressedButton(keyName))
        //setBgColor(generateRandomColor());
        audio.play();
        dispatch(setDisplayName(audios[keyName].name))
        setTimeout(() => {
            setIsPressed(false);
            setBgColor("gray");
        }, 200);
        
    }
    

    const handleKeyPress = (event) => {
        if(event.key == keyName) {
            handleClick();
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, []);

      const buttonStyle = {
        backgroundColor: isPressed ? bgColor : "gray",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.2s ease-in-out",
      };

      

    return (
        <div
            autoFocus
            tabIndex="0"
            onKeyDown={handleKeyPress} 
            className="text-center col-4 pt-4 pb-4">
            <Button 
                style={buttonStyle}
                onClick={handleClick}
                className="drum-pad w-100 fs-3 h-100 shadow" 
                variant="outline-success"
                size="lg">
                {keyName}
            </Button>
            <audio id={keyName} src={audios[keyName].src} className="clip" />
        </div>
    )
}
export default KeyComp;


