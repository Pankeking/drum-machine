import React from "react";
import SelectorComp from "./SelectorComp";
import VolumeComp from "./VolumeComp";
import DisplayKeyComp from "./DisplayKeyComp";

function SettingsComp() {
    return (
        <div className="col-6 row">
            <SelectorComp selecName={"on/off"}/>
            <DisplayKeyComp displayName={"Heater-1"}/>
            <VolumeComp />
            <SelectorComp selecName={"drum/piano"}/>
        </div >
    )
}
export default SettingsComp;