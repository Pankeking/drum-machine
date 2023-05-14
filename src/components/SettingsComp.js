import React from "react";
import PowerComp from "./PowerComp";
import VolumeComp from "./VolumeComp";
import DisplayKeyComp from "./DisplayKeyComp";

function SettingsComp() {
    return (
        <div id="settings" className="col-6 row">
            <PowerComp />
            <DisplayKeyComp />
            <VolumeComp />
        </div >
    )
}
export default SettingsComp;