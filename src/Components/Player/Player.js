import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Player.css";

const Player = ({ player, handleSelectPlayer }) => {
    const { name, picture, price, gender } = player;
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 player mb-5">
            <img className="img-fluid" src={picture} alt="" />
            <h3 className="mt-3">{name}</h3>
            <p className="mb-2">Gender: {gender}</p>
            <h5 className="mb-3 fw-bold">Base Price : ${price}</h5>
            <button onClick={() => handleSelectPlayer(player)}>
                Select Army <FontAwesomeIcon className="ms-3" icon={faArrowRightLong} />
            </button>
        </div>
    );
};

export default Player;
