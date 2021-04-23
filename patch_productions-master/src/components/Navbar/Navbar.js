import React, { Component } from "react";
//import { Item } from "semantic-ui-react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import { Button } from '../Button';
import Patch from '../Home/patchLogo.png';
//imrc + tab

class NavBar extends Component {
   state = { clicked: false }

   handleClick = () => {
       this.setState({ clicked: !this.state.clicked })
       if(this.state.clicked === true) {
         
       }
   }  

   

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> <i id="icon">
        </i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
         <i id="burger" className={this.state.clicked ? "fas fa-times"  : "fas fa-bars"}></i><img src={Patch} alt="Patch"></img>
        </div>
        <ul  className={this.state.clicked ? 'nav-menu active' : 'nav-menu' } >
          {MenuItems.map((item, index) => {
            return (
              <li key ={index}>
                <a id ="linkkk" className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>
            );
          })}
        </ul>
       
        <Button className="myButton">Sign Up</Button>
        <Button className="myButton2">Log In</Button>
        
 
      </nav>
    );
  }
}

export default NavBar;