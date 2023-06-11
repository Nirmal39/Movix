import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const Footer = () => {

    const navigate = useNavigate()
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    App to take list of every Movie and Tv Shows with Ratings,Reviews and all Details
                </div>
                <div className="socialIcons">
                    <span className="icon" >
                        <FaFacebookF />
                    </span>
                    <span className="icon" >
                        <a href="https://www.instagram.com/nirmalg_/"  target="_blank">
                        <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/nirmal-gupta/"  target="_blank">
                        <FaLinkedin />
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

