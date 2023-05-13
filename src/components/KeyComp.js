import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";


function KeyComp({ keyName }) {

    const [isPressed, setIsPressed] = useState(false);
    const [bgColor,setBgColor] = useState("blue")

    const buttonStyle = {
        backgroundColor: isPressed ? bgColor : "gray",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "16px",
      };

    const audios = {
        q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        w: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        e: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        a: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        s: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        d: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        x: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        c: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    }

    const generateRandomColor = () => {
        return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        
    } 

    const handleClick = () => {
        const audio = new Audio(audios[keyName]);
        audio.currentTime = 0;
        setIsPressed(!isPressed);
        setBgColor(generateRandomColor());
        audio.play();
        setTimeout(() => {
            setIsPressed(false);
          }, 400);
    }
    const handleKeyPress = (event) => {
        if (event.key === keyName) {
            const audio = new Audio(audios[keyName]);
            audio.currentTime = 0;
            setIsPressed(!isPressed);
            setBgColor(generateRandomColor());
            audio.play();
            setTimeout(() => {
                setIsPressed(false);
              }, 400);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, [handleKeyPress]);

      

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
            <audio id={keyName} src={audios[keyName]} className="clip" />
        </div>
    )
}
export default KeyComp;


