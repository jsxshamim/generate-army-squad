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
        <section id="players" className="container players-container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row  gx-5">
                        {players.map((player) => (
                            <Player key={player.id} handleSelectPlayer={handleSelectPlayer} player={player}></Player>
                        ))}
                    </div>
                </div>
                <aside className="col-lg-3 bg-light player-cart p-4">
                    <div className="row cart-container">
                        <PlayerCart handleReset={handleReset} players={cartPlayers}></PlayerCart>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Players;
