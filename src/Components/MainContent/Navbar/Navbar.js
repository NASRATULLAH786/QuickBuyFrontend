import React from "react";
import './Navbar.css';
function Navbar()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark"  style={{backgroundColor: "rgb(22, 20, 20)"}}>
                <a className="navbar-brand" href="/">
                <img src="/Photos/logo.png" className="img-responsive" alt="Image" style={{width: "60px", height:"60px"}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                       {/*  <!-- Starting coding for men Menu--> */}
                        <li className="nav-item dropdown">
                        <div className="dropdown">
                            <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{backgroundColor: "rgb(22, 20, 20)",color: "white"}}>
                                Men
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div  className="d-md-flex align-items-start justify-content-start">
                                    <div>
                                    <h6 className="header-for-Men"> Topwear </h6>
                                    <a className="dropdown-item" href="/MenShirtsScreen">Shirts</a>
                                    <a className="dropdown-item" href="/MenTShirtsScreen">T-Shirts</a>
                                    <a className="dropdown-item" href="/MenJacketsScreen">Jackets</a>
                                    <h6 className="header-for-Men"> Innerwear </h6>
                                    <a className="dropdown-item" href="/MenVastsScreen">Vests</a>
                                    <a className="dropdown-item" href="/MenBoxersScreen">Boxers</a>
                                    <a className="dropdown-item" href="/MenBriefsScreen">Briefs</a>
                                </div>
                                <div>
                                    <h6 className="header-for-Men"> Buttomwear </h6>
                                    <a className="dropdown-item" href="/MenJeansScreen">Jeans</a>
                                    <a className="dropdown-item" href="/MenShortsScreen">Shorts</a>
                                    <a className="dropdown-item" href="/MenTrousersScreen">Trousers</a>
                                    <h6 className="header-for-Men"> Accessories </h6>
                                    <a className="dropdown-item" href="/MenWatchesScreen">Watches</a>
                                    <a className="dropdown-item" href="/MenNecklacesScreen">Necklaces</a>
                               </div>
                                <div>
                                    <h6 className="header-for-Men"> Footwears </h6>
                                      <a className="dropdown-item" href="MenSneakersScreen">Sneakers</a>
                                    <a className="dropdown-item" href="/MenSlippersScreen">Slippers</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        </li>
                       {/*  <!-- Starting coding for Women Menu--> */}
                        <li className="nav-item">
                            <li className="nav-item dropdown">
                                <div className="dropdown">
                                    <button className="btn women1" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{backgroundColor: "rgb(22, 20, 20)",color: "white"}}>
                                        Women
                                    </button>
                                    <div className="dropdown-menu women" aria-labelledby="dropdownMenuButton">
                                        <div className="d-md-flex align-items-start justify-content-start">
                                            <div>
                                                <h6 className="header-for-women"> Topwear </h6>
                                                <a className="dropdown-item" href="/WomenShirtsScreen">Shirts</a>
                                                <a className="dropdown-item" href="/WomenJacketsScreen">Jackets</a>
                                                <h6 className="header-for-women"> LingeriesWear </h6>
                                                <a className="dropdown-item" href="/WomenBraScreen">Bras</a>
                                                <a className="dropdown-item" href="/WomenPantyScreen">Panties</a>
                                            </div>
                                            <div>
                                                <h6 className="header-for-women"> Bottomwear </h6>
                                                <a className="dropdown-item" href="/WomenJeansScreen">Jeans</a>
                                                <a className="dropdown-item" href="/WomenTrackPantScreen">Track Pants</a>
                                                <h6 className="header-for-women"> Jewellery  </h6>
                                                <a className="dropdown-item" href="/WomenWatchesScreen">Watches</a>
                                                <a className="dropdown-item" href="/WomenRingsScreen">Rings</a>

                                            </div>
                                            <div>
                                                <h6 className="header-for-women"> Footwears </h6>
                                                <a className="dropdown-item" href="/WomenShoesScreen">Shoes</a>
                                                <a className="dropdown-item" href="/WomenHeelsScreen">Heels</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </li>
                        </li>
                        {/* <!-- Starting coding for Kids Menu--> */}
                        <li className="nav-item">
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <button className="btn kids" type="button" id="dropdownMenuButton" data-toggle="dropdown"  style={{backgroundColor: "rgb(22, 20, 20)",color: "white"}}>
                                    Kids
                                </button>
                                <div className="dropdown-menu kids" aria-labelledby="dropdownMenuButton">
                                    <div className="d-md-flex align-items-start justify-content-start">
                                        <div>
                                            <h6 className="header-for-kids"> Boys Clothing </h6>
                                            <a className="dropdown-item" href="/BoyTShirtsScreen">Shirts</a>
                                            <a className="dropdown-item" href="/BoyJeansScreen">Jeans</a>
                                            <h6 className="header-for-kids"> Boys Footwear </h6>
                                            <a className="dropdown-item" href="/BoysShoesScreen">Shoes</a>
                                            <a className="dropdown-item" href="/BoysSandalsScreen">Sandals</a>
                                        </div>
                                        <div>
                                            <h6 className="header-for-kids">Girls Clothing </h6>
                                            <a className="dropdown-item" href="/GirlsJeansScreen">Jeans</a>
                                            <a className="dropdown-item" href="/GirlsTshirtsScreen">Shirts</a>
                                            <h6 className="header-for-kids"> Girls Footwear </h6>
                                            <a className="dropdown-item" href="/GirlsShoesScreen">Shoes</a>
                                            <a className="dropdown-item" href="/GirlsSandalsScreen">Sandals</a>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="About.html">About</a>
                        </li>
                    </ul>
                    <div>
                    <form className="form-inline justify-content-between">
                        <input className="form-control mr-sm-2 bg-light btn-outline-info input-group-lg"  type="search" placeholder="Search for products... " aria-label="Search"/>
                        <button className="btn btn- my-2 my-sm-0 bg-dark" type="submit"><i className="fas fa-search "></i></button>
                      </form>
                    </div>
                    <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="#"><i className="far fa-user"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-cart-plus"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;