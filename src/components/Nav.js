import React, { useEffect, useState } from 'react';
import "../css/Nav.css";

const Nav = () => {

    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll", () => console.log("REMOVED"))
        }
    })

    return (
        <div className={`nav ${show ? "nav__black" : ""}`}>
            <img className="nav__logo" src="https://keirjohnson.tv/wp-content/uploads/2021/03/Netflix-Logo.png" alt="Netflix-Logo" />
            <img className="nav__avatar" src="https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg" alt="Netflix-Avatar" />
        </div>
    )
}

export default Nav
