import React, { useState } from "react";
import LeaderModal from "./LeaderModal";
import SelectedPlayers from "./SelectedPlayers";
import "./PlayerCart.css";

const PlayerCart = ({ players, handleReset }) => {
    const [leader, setLeader] = useState({});
    const [show, setShow] = useState(false);

    const handleChooseLeader = () => {
        if (players.length === 4) {
            handleShow();
            const randomPlayer = players[Math.floor(Math.random() * players.length)];
            setLeader(randomPlayer);
        } else {
            alert("need to select 4 players");
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <h3 className="my-4">Selected Players</h3>
            <div className="cart-players">
                {players.map((player) => (
                    <SelectedPlayers key={player.id} player={player}></SelectedPlayers>
                ))}
            </div>
            <button className="mb-3 me-3" onClick={handleChooseLeader}>
                Choose Squad Leader
            </button>
            <button onClick={handleReset}>Choose Another Squad</button>
            <LeaderModal show={show} handleClose={handleClose} leader={leader}></LeaderModal>
        </div>
    );
};

export default PlayerCart;
