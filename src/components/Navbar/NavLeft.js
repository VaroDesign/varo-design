import React, { Component } from 'react';
import { MenuItemsLeft } from "./MenuItems";

class NavLeft extends Component {
    render() {
        return (
            <div className="nav-items-left">
                    <ul className="nav-menu">
                        {MenuItemsLeft.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
            </div>
        );
    }
}

export default NavLeft;