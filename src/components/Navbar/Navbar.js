import React, { Component } from 'react';
import NavLeft from './NavLeft';
import NavRight from './NavRight';
import { MenuItemsMobile } from "./MenuItems";
import { VaroLogo } from '../ui/logos';

import Sticky from 'react-sticky-state';

const scrollClass = {
    down: 'sticky-scroll-down',
    up: 'sticky-scroll-up'
  }

class Navbar extends Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    } 
    render(){
        return(
            <Sticky scrollClass={scrollClass}>
            <nav className="NavbarItems sticky top">
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
                <NavLeft />
                <VaroLogo 
                    linkTo="/"
                />
                <NavRight />
                </div>
            </nav>
            </Sticky>
        )
    }
}

export default Navbar