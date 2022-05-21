import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import PlayerCart from "../PlayerCart/PlayerCart";
import "./Players.css";

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("data/data.json")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    const [cartPlayers, setCartPlayer] = useState([]);

    const handleSelectPlayer = (selectedPlayer) => {
        let newCart = [];
        const exists = cartPlayers.find((player) => player.id === selectedPlayer.id);

        if (!exists) {
            if (cartPlayers.length < 4) {
                newCart = [...cartPlayers, selectedPlayer];
            } else {
                newCart = [...cartPlayers];
                alert("Your team is full, choose your leader and jump into battle.");
            }
        } else {
            newCart = [...cartPlayers];
            alert("Already Exists");
        }
        setCartPlayer(newCart);
    };

    const handleReset = () => {
        setCartPlayer([]);
    };

    return (
        <section id="players" className="container-fluid container-xl players-container">
            <div className="row">
                <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7 py-5 order-2 order-md-1">
                    <div className="row  gx-4 gx-lg-5">
                        {players.map((player) => (
                            <Player key={player.id} handleSelectPlayer={handleSelectPlayer} player={player}></Player>
                        ))}
                    </div>
                </div>
                <aside className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 player-cart px-4 order-1 order-md-2">
                    <div className="row cart-container">
                        <PlayerCart handleReset={handleReset} players={cartPlayers}></PlayerCart>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Players;
