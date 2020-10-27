import React, { useState } from 'react';
import { MenuItemsLeft, MenuItemsRight, MenuItemsMobile } from "./MenuItems";

export default function Component () {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="nav-items-left">
      <ul className="nav-menu">
          {MenuItemsLeft.map((item, index) => {
          return (
              <li key={index}>
                  <a className={item.cName} href={item.url}>
                      {item.title}
                  </a>
                  <span className={hovered ? 'top-line active' : 'top-line'} onMouseEnter={toggleHover} onMouseLeave={toggleHover}></span>
              </li>
              )
          })}
      </ul>
    </div>
  )
}