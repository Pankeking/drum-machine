import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { setVolume } from "../features/volumeSlice";

function VolumeComp() {

    const volume = useSelector((state) => state.volume.volumeLevel)
    const dispatch = useDispatch()

    const handleVolumeChange = (event) => {
        dispatch(setVolume(event.target.value))
    }

    return (
        <div>
            <Form.Group controlId="volumeRange">
                <Form.Label>Volume: {volume}</Form.Label>
                <Form.Control
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </Form.Group>
        </div>
    )
}
export default VolumeComp;