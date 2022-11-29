import React from "react";
import './Body.css';
function Body()
{
    return(
        <div>
           {/*  <!-- </div> --> */}
       {/*  <!-- Catagory --> */}
        <div className="Catagory">
            <div className="cardC" style={{width: "16rem"}}>
                <a href="/HomeScreen"><img src="/Photos/man.jpg" className="rounded-circle" alt="Men"/></a>
                    <h4>Men</h4>
            </div>
            <div className="cardC" style={{width: "16rem"}}>
                <a href="#"><img src="/Photos/woman.png" className="rounded-circle" alt="Women"/></a>
                    <h4>Women</h4>
            </div>
            <div className="cardC" style={{width: "16rem"}}>
                <a href="#"><img src="/Photos/kid.jpg" className="rounded-circle" alt="Kids"/></a>
                    <h4> Kids</h4>
            </div>
            <div className="cardC" style={{width: "16rem"}}>
                <a href="#"><img src="/Photos/TShirt.png" className="rounded-circle" alt="Men's T-shirt"/></a>
                    <h4>Men's T-Shirt</h4>
            </div>
            <div className="cardC" style={{width: "16rem"}}>
                <a href="#"><img src="/Photos/womenTShirt.jpeg" className="rounded-circle" alt="Women's T-Shirt"/></a>
                    <h4>Women's T-Shirt</h4>
            </div>
        </div>
        </div>
    )
}
export default Body;