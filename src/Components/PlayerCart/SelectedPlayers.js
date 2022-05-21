import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SelectedPlayers = ({ player }) => {
    return (
        <div className="selected-player row justify-content-between align-items-center  mb-3">
            <div className="col-4">
                <img width={60} height={60} src={player.picture} alt="" />
            </div>
            <div className="name-price col-6">
                <h6>{player.name}</h6>
                <p>Price: ${player.price}</p>
            </div>
            <button className="btn col-2">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default SelectedPlayers;
