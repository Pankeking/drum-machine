import React from "react";
import SelectorComp from "./PowerComp";
import VolumeComp from "./VolumeComp";
import DisplayKeyComp from "./DisplayKeyComp";

function SettingsComp() {
    return (
        <div id="settings" className="col-6 row">
            <SelectorComp />
            <DisplayKeyComp />
            <VolumeComp />
        </div >
    )
}
export default SettingsComp;