import React from 'react';
import { Link } from 'react-router-dom';

import varologo from '../../img/VaroDesignLogo.png';

export const VaroLogo = (props) => {
    return (
        <Link to={props.linkTo}>
            <div className="logo">
                    <img src={varologo} alt="VaroDesign Logo"/>
            </div>
        </Link>
    )
}