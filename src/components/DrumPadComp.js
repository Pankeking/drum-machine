import React from "react";
import KeysComp from "./KeysComp";
import SettingsComp from "./SettingsComp";

function DrumPadComp() {
    return (
        <div id="drum-machine" className="drums row">
            <KeysComp />
            <SettingsComp />
        </div>
    )
}
export default DrumPadComp;