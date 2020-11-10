import React, { Component } from 'react';
import { VaroLogo } from '../ui/logos';
import { MenuItemsMobile } from "../Navbar/MenuItems";

class MobileNav extends Component {
    
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    } 
    render(){
        return(
            <nav className="NavbarItems">
                <div className="nav-panel">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>     
                </div>
                <ul className={this.state.clicked ? 'mobile-nav active' : 'mobile-nav'}>
                        {MenuItemsMobile.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                             )
                })}
            </ul>
                <VaroLogo 
                    linkTo="/"
                />
                </div>
            </nav>
        )
    }
}

export default MobileNav