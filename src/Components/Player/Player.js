import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Player.css";

const Player = ({ player, handleSelectPlayer }) => {
    const { name, picture, price, gender } = player;
    return (
        <div className="col-lg-4 player mb-5">
            <img className="img-fluid" src={picture} alt="" />
            <h3>player name: {name}</h3>
            <p>gender: {gender}</p>
            <p>Base Price : ${price}</p>
            <button onClick={() => handleSelectPlayer(player)}>
                Select Army <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
        </div>
    );
};

export default Player;
