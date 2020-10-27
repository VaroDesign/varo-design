import React, { Component } from 'react';
import { MenuItemsLeft } from "./MenuItems";
import { Link } from 'react-router-dom';

class NavLeft extends Component {
    render() {
        return (
            <div className="nav-items-left">
                    <ul className="nav-menu">
                        {/* Here will comes Li element for side drawer */}
                        {MenuItemsLeft.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.url} className={item.cName}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
            </div>
        );
    }
}

export default NavLeft;