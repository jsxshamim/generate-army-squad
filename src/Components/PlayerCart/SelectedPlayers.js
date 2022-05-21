import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SelectedPlayers = ({ player }) => {
    const { picture, name, price } = player;
    return (
        <div className="selected-player row justify-content-between align-items-center  mb-3">
            <div className="col-4">
                <img width={60} height={60} src={picture} alt="" />
            </div>
            <div className="name-price col-6">
                <h6>{name}</h6>
                <p>Price: ${price}</p>
            </div>
            <button className="btn col-2">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default SelectedPlayers;
