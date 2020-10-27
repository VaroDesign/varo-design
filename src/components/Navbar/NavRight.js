import React, { Component } from 'react';
import { MenuItemsRight } from "./MenuItems";

class NavRight extends Component {
    render() {
        return (
            <div className="nav-items-right">
                    <ul className="nav-menu">
                        {MenuItemsRight.map((item, index) => {
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

export default NavRight;