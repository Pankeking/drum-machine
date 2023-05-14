import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayName } from "../features/displaySlice";
import { setPressedButton, clearPressedButton } from "../features/buttonSlice";


function KeyComp({ keyName }) {
    const pressedButton = useSelector((state) => state.button.pressedButton);
    const volumeLevel = useSelector((state) => state.volume.volumeLevel);
    const isOn = useSelector((state) => state.power.isOn);
    const dispatch = useDispatch();


    const audios = {
        Q: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", name: "Heater 1"},
        W: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", name: "Heater 2"},
        E: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", name: "Heater 3"},
        A: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", name: "Heater 4"},
        S: {src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", name: "Heater 6"},
        D: {src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", name: "Dsc Oh"},
        Z: {src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", name: "Kick n' Hat"},
        X: {src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", name: "Kick"},
        C: {src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", name: "Hat"},
    }

    const colors = [
        "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#FFC0CB",
        "#800080", "#FFA500", "#FF4500", "#1E90FF", "#8B008B", "#FF1493",
        "#9400D3", "#00BFFF", "#FF69B4"
      ];

    const name = audios[keyName].name;
    const source = audios[keyName].src;
    

    const generateRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
      };

    const handleClick = () => {
        const audio = document.getElementById(keyName);
        
        if(isOn) {
            audio.volume = volumeLevel / 100;
        } else {
            audio.volume = 0;
        }
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
            .then(() => {
                dispatch(setDisplayName(name))
                dispatch(setPressedButton(keyName))
                setTimeout(() => {
                    dispatch(clearPressedButton());
                }, 75);
            })
            .catch(error => {
                console.error("failed to play audio", error);
            })
        }
        
    }
    
    const handleKeyPress = (event) => {
        if(event.key.toLowerCase() === keyName.toLowerCase()) {
            handleClick();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      });

      const isPressed = pressedButton === keyName;

    return (
        <div
            id={name}
            onKeyDown={handleKeyPress} 
            className="drum-pad text-center col-4 pt-4 pb-4">
            <Button 
                style={{backgroundColor: isPressed ? generateRandomColor() : "gray"}}
                onClick={handleClick}
                className={`w-100 drum-button fs-3 h-75 shadow ${isPressed ? "press" : ""}`} 
                variant="outline-success"
                size="lg"
                >
                {keyName}
                <audio 
                    id={keyName}
                    src={source} 
                    autoPlay={true}
                    className="clip" 
                >
                </audio>
            </Button>
        </div>
    )
}
export default KeyComp;


