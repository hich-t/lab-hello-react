import React from "react";
import "./Hello.css"
import ironhackLogo from "./images/ironhack-logo-xs.png"
import menuLogo from "./images/menu-top-xs.png"


const sayHello = () => {
    return (
    <>
     <div className="block">
     <div className="logos">
     <img className="logoIronhack" src={ironhackLogo} alt="logo ironhack" />
     <img className="logoMenu" src={menuLogo} alt="menu logo" />
    </div>

    <div class="text">
     <h1 className="title">Say hello to<br /> ReactJS</h1>

     <h2 className="parag">You will learn how to use<br />
     the most popular frontend library,<br />
     and become a super Ninja developer.</h2>


    <p className="awesome">Awesome !</p>
    </div>
    </div>

    </>
    )
}

export default sayHello