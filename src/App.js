import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductScreen from './Components/Screens/ProductScreen';
import HomeScreen from './Components/Screens/HomeScreen';
import Footer from  './Components/MainContent/Footer/Footer.js';
import Navbar from './Components/MainContent/Navbar/Navbar.js';
import Body from './Components/MainContent/Body/Body';
import MenShirtsScreen from './Components/Men/Topwear/Shirts/MenShirtsScreen';
import MenSProductScreen from './Components/Men/Topwear/Shirts/MenSProductScreen';
import MenTShirtsScreen from './Components/Men/Topwear/Tshirts/MenTShirtsScreen';
import MenTShirtsProductScreen from './Components/Men/Topwear/Tshirts/MenTShirtsProductScreen';
import MenJacketsScreen from './Components/Men/Topwear/Jackets/MenJacketsScreen';
import MenJacketsProductScreen from './Components/Men/Topwear/Jackets/MenJacketsProductScreen';
import MenVestsScreen from './Components/Men/Innerwear/Vests/MenVestsScreen';
import MenVestsProductScreen from './Components/Men/Innerwear/Vests/MenVestsProductScreen';
import MenBoxersScreen from './Components/Men/Innerwear/Boxers/MenBoxersScreen.js';
import MenBoxersProductScreen from './Components/Men/Innerwear/Boxers/MenBoxersProductScreen';
import MenBriefsScreen from './Components/Men/Innerwear/Briefs/MenBriefsScreen.js';
import MenBriefsProductScreen from './Components/Men/Innerwear/Briefs/MenBriefsProductScreen';
import MenJeansScreen from './Components/Men/Buttonwear/Jeans/MenJeansScreen';
import MenJeansProductScreen from './Components/Men/Buttonwear/Jeans/MenJeansProductScreen';
import MenShortsScreen from './Components/Men/Buttonwear/Shorts/MenShortsScreen';
import MenShortsProductScreen from './Components/Men/Buttonwear/Shorts/MenShortsProductScreen.js'
import MenTrousersScreen from './Components/Men/Buttonwear/Trousers/MenTrousersScreen';
import MenTrousersProductScreen from './Components/Men/Buttonwear/Trousers/MenTrousersProductScreen';
import MenSneakersScreen from './Components/Men/Footwear/Sneakers/MenSneakersScreen';
import MenSneakersProductScreen from './Components/Men/Footwear/Sneakers/MenSneakersProductScreen';
import MenWatchesScreen from './Components/Men/Accessories/Watches/MenWatchesScreen';
import MenWatchesProductScreen from './Components/Men/Accessories/Watches/MenWatchesProductScreen';
import BoyJeansScreen from './Components/Kids/BoysClothing/BoyJeans/BoyJeansScreen';
import BoyJeansProductScreen from './Components/Kids/BoysClothing/BoyJeans/BoysJeansProductScreen';
import MenSlippersScreen from './Components/Men/Footwear/Slippers/MenSlippersScreen';
import MenSlippersProductScreen from './Components/Men/Footwear/Slippers/MenSlippersProductScreen';
import MenNecklacesScreen from './Components/Men/Accessories/Necklaces/MenNeclacesScreen';
import MenNecklacesProductScreen from './Components/Men/Accessories/Necklaces/MenNecklacesProductScreen';
import WomenJeansScreen from './Components/Women/Bottomwear/WomenJeans/WomenJeansScreen';
import WomenJeansProductScreen from './Components/Women/Bottomwear/WomenJeans/WomenJeansProductScreen';
import WomenTrackPantScreen from './Components/Women/Bottomwear/WomenTrackPant/WomenTrackPnatScreen';
import WomenTrackPantsProductScreen from './Components/Women/Bottomwear/WomenTrackPant/WomenTrackPnantsProductScreen';
import WomenHeelsScreen from './Components/Women/Footwear/WomenHeels/WomenHeelsScreen';
import WomenHeelsProductScreen from './Components/Women/Footwear/WomenHeels/WomenHeelsProductScreen';
import WomenShoesPantScreen from './Components/Women/Footwear/WomenShoes/WomenShoesPnatScreen';
import WomenShoesProductScreen from './Components/Women/Footwear/WomenShoes/WomenShoesProductScreen';
import WomenWatchesScreen from './Components/Women/Jewellery/WomenWatches/WomenWatchesScreen';
import WomenWatchesProductScreen from './Components/Women/Jewellery/WomenWatches/WomenWatchesProductScreen';
import WomenRingsScreen from './Components/Women/Jewellery/WomenRings/WomenRingsScreen';
import WomenRingsProductScreen from './Components/Women/Jewellery/WomenRings/WomenRingsProductScreen';
import WomenBraScreen from './Components/Women/LingeriesWear/WomenBras/WomenBraScreen';
import WomenBraProductScreen from './Components/Women/LingeriesWear/WomenBras/WomenBraProductScreen';
import WomenPantyScreen from './Components/Women/LingeriesWear/WomenPantys/WomenPantyScreen';
import WomenPantyProductScreen from './Components/Women/LingeriesWear/WomenPantys/WomenPantyProductScreen';
import WomenJacketsScreen from './Components/Women/Topwear/WomenJackets/WomenJacketsScreen';
import WomenJacketsProductScreen from './Components/Women/Topwear/WomenJackets/WomenJacketsProductScreen';
import WomenShirtsScreen from './Components/Women/Topwear/WomenShirts/WomenShirtsScreen';
import WomenShirtsProductScreen from './Components/Women/Topwear/WomenShirts/WomenShirtsProductScreen';
import BoySandalsScreen from './Components/Kids/BoysFootwear/BoySandals/BoySandalsScreen';
import BoySandalsProductScreen from './Components/Kids/BoysFootwear/BoySandals/BoysSandalsProductScreen';
import BoysShoesScreen from './Components/Kids/BoysFootwear/BoyShoes/BoysShoesScreen';
import BoysShoesProductScreen from './Components/Kids/BoysFootwear/BoyShoes/BoysShoesroductScreen';
import GirlsJeansScreen from './Components/Kids/GirlsClothing/GirlJeans/GirlsJeansScreen';
import GirlsJeansProductScreen from './Components/Kids/GirlsClothing/GirlJeans/GirlsJeansProductScreen';
import GirlsTshirtsScreen from './Components/Kids/GirlsClothing/GirlShirts/GirlsTshirtsScreen';
import GirlsTshirtsProductScreen from './Components/Kids/GirlsClothing/GirlShirts/GirlsTshirtsProductScreen';
import BoyTShirtsScreen from './Components/Kids/BoysClothing/BoyShirts/BoyTShirtsScreen';
import BoyTShirtsProductScreen from './Components/Kids/BoysClothing/BoyShirts/BoysTShirtsProductScreen';
import GirlsSandalsScreen from './Components/Kids/GirlsFootwear/GirlSandals/GirlsSandalsScreen';
import GirlsSandalsProductScreen from './Components/Kids/GirlsFootwear/GirlSandals/GirlsSandalsProductScreen';
import GirlsShoesScreen from './Components/Kids/GirlsFootwear/GirlShoes/GirlsSandalsScreen';
import GirlsShoesProductScreen from './Components/Kids/GirlsFootwear/GirlShoes/GirlsShoesProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div >
    <Navbar/>
    <Switch>
    <Route path="/" component={Body} exact></Route>
    <Route path="/HomeScreen" component={HomeScreen} exact></Route>
    <Route path="/product/:id" component={ProductScreen} exact></Route>
    <Route path="/MenShirtsScreen" component={MenShirtsScreen}></Route>
    <Route path="/ms/:id" component={MenSProductScreen}></Route>
    <Route path="/MenTShirtsScreen" component={MenTShirtsScreen}></Route>
    <Route path="/mts/:id"   component={MenTShirtsProductScreen}></Route>
    <Route path="/MenJacketsScreen" component={MenJacketsScreen}></Route>
    <Route path="/mj/:id" component={MenJacketsProductScreen}></Route>
    <Route path="/MenVastsScreen" component={MenVestsScreen}></Route>
    <Route path="/mv/:id" component= {MenVestsProductScreen}></Route>
    <Route path="/MenBoxersScreen" component={MenBoxersScreen}></Route>
    <Route path = "/mb/:id" component = {MenBoxersProductScreen}></Route>
    <Route path="/MenBriefsScreen" component={MenBriefsScreen}></Route>
    <Route path="/mbr/:id" component={MenBriefsProductScreen}></Route>
    <Route path ="/MenJeansScreen" component={MenJeansScreen}></Route>
    <Route path="/mje/:id" component={MenJeansProductScreen}></Route>
    <Route path="/MenShortsScreen" component={MenShortsScreen}></Route>
    <Route path = "/msh/:id" component = {MenShortsProductScreen}></Route>
    <Route path = "/MenTrousersScreen" component = {MenTrousersScreen}></Route>
    <Route path = "/MenSlippersScreen" component={MenSlippersScreen}></Route>
    <Route path = "/msl/:id" component ={MenSlippersProductScreen}></Route>
    <Route path = "/mt/:id" component={MenTrousersProductScreen}></Route>
    <Route path = "/MenSneakersScreen" component={MenSneakersScreen}></Route>
    <Route path = "/msn/:id" component = {MenSneakersProductScreen}></Route>
    <Route path = "/MenWatchesScreen" component = {MenWatchesScreen}></Route>
    <Route path = "/mWatches/:id" component = {MenWatchesProductScreen}></Route>
    <Route path="/MenNecklacesScreen" component={MenNecklacesScreen}></Route>
    <Route path="/mNeckless/:id" component={MenNecklacesProductScreen}></Route>
    <Route path= "/BoyJeansScreen" component ={BoyJeansScreen}></Route>
    <Route path = "/bJeans/:id" component = {BoyJeansProductScreen}></Route>
    <Route path ="/WomenJeansScreen" component = {WomenJeansScreen}></Route>
    <Route path = "/wJeans/:id" component = {WomenJeansProductScreen}></Route>
    <Route path = "/WomenTrackPantScreen" component = {WomenTrackPantScreen}></Route>
    <Route path = "/wTrackPant/:id" component = {WomenTrackPantsProductScreen}></Route>
    <Route path = "/WomenHeelsScreen" component={WomenHeelsScreen}></Route>
    <Route path = "/wh/:id" component={WomenHeelsProductScreen}></Route>
    <Route path = "/WomenShoesScreen" component={WomenShoesPantScreen}></Route>
    <Route path = "/wShoes/:id" component={WomenShoesProductScreen}></Route>
    <Route path ="/WomenWatchesScreen" component ={WomenWatchesScreen}></Route>
    <Route path ="/wWatches/:id" component = {WomenWatchesProductScreen}></Route>
    <Route path = "/WomenRingsScreen" component={WomenRingsScreen}></Route>
    <Route path ="/wRings/:id" component = {WomenRingsProductScreen}></Route>
    <Route path = "/WomenBraScreen" component={WomenBraScreen}></Route>
    <Route path = "/wBra/:id" component ={WomenBraProductScreen}></Route>
    <Route path = "/WomenPantyScreen" component ={WomenPantyScreen}></Route>
    <Route path = "/wPanty/:id" component = {WomenPantyProductScreen}></Route>
    <Route path = "/WomenJacketsScreen" component ={WomenJacketsScreen}></Route>
    <Route path = "/wJackets/:id" component = {WomenJacketsProductScreen}></Route>
    <Route path = "/WomenShirtsScreen" component = {WomenShirtsScreen}></Route>
    <Route path ="/wShirts/:id" component ={WomenShirtsProductScreen}></Route>
    <Route path ="/BoysSandalsScreen" component={BoySandalsScreen}></Route>
    <Route path = "/bSandals/:id" component={BoySandalsProductScreen}></Route>
    <Route path="/BoysShoesScreen" component={BoysShoesScreen}></Route>
    <Route path ="/bShoes/:id" component={BoysShoesProductScreen}></Route>
    <Route path ="/GirlsJeansScreen" component ={GirlsJeansScreen}></Route>
    <Route path ="/gJeans/:id" component = {GirlsJeansProductScreen}></Route>
    <Route path ="/GirlsTshirtsScreen" component ={GirlsTshirtsScreen}></Route>
    <Route path ="/gTshirts/:id" component={GirlsTshirtsProductScreen}></Route>
    <Route path ="/BoyTShirtsScreen" component={BoyTShirtsScreen}></Route>
    <Route path ="/bTShirts/:id" component = {BoyTShirtsProductScreen}></Route>
    <Route path ="/GirlsSandalsScreen" component={GirlsSandalsScreen}></Route>
    <Route path ="/gSandals/:id" component={GirlsSandalsProductScreen}></Route>
    <Route path = "/GirlsShoesScreen" component={GirlsShoesScreen}></Route>
    <Route path ="/gShoes/:id" component={GirlsShoesProductScreen}></Route>
   </Switch>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
