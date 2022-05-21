import React from "react";
import { Button, Modal } from "react-bootstrap";
import warImage from "../../Images/war.gif";

const LeaderModal = ({ leader, show, handleClose }) => {
    const jumpIntoWar = () => {
        // just for fun
        const body = document.getElementById("App");
        body.innerHTML = `<img class="w-100" src=${warImage} alt="" />`;
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Squad Leader</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{leader.name}</p>
                <img className="w-100" src={leader.picture} alt="" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={jumpIntoWar}>
                    Jump Into Battle
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LeaderModal;
