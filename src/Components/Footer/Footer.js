import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top container">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    Shamim Reza
                </a>
                <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc. All rights reserved.</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a class="text-muted" href="https://twitter.com/wpshamim">
                        <FontAwesomeIcon className="fs-4" icon={faTwitter} />
                    </a>
                </li>
                <li className="ms-3">
                    <a class="text-muted" href="https://www.instagram.com/gfx.shamim/">
                        <FontAwesomeIcon className="fs-4" icon={faInstagram} />
                    </a>
                </li>
                <li className="ms-3">
                    <a class="text-muted" href="https://www.facebook.com/shamimreza.dev/">
                        <FontAwesomeIcon className="fs-4" icon={faFacebook} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
