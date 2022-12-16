import React from "react";
import "./Components.css"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"



const SecondPart = () => {
return (
<>
<div className="composants">

<div className="first"> 
<img className="icons" src={icon1} alt="icon"/>
<h1 className="titles">Declarative</h1>
<p className="paragraphs">Reacte makes it painless to create interactive UIs</p>
</div>

<div className="second"> 
<img className="icons" src={icon2} alt="icon"/>
<h1 className="titles">Components</h1>
<p className="paragraphs">Build encapsulated components that manage their state.</p>
</div>

<div className="third"> 
<img className="icons" src={icon3} alt="icon"/>
<h1 className="titles">Single-Way</h1>
<p className="paragraphs">A set of immutable values are passed to the components.</p>
</div>

<div className="fourth"> 
<img className="icons" src={icon4} alt="icon"/>
<h1 className="titles">JSX</h1>
<p className="paragraphs">Statically-typed, designed to run on modern browsers.</p>
</div>

</div>
</>
)
}

export default SecondPart