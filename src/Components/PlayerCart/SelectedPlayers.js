import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SelectedPlayers = ({ player }) => {
    return (
        <div>
            <div className="selected-player d-flex justify-content-between mb-3">
                <span>{player.name}</span>{" "}
                <button className="btn">
                    {" "}
                    <FontAwesomeIcon icon={faTrash} />{" "}
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayers;
