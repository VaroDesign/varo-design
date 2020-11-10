import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaInstagram, FaRegLaughWink, FaCamera } from 'react-icons/fa';
import sidebarBg from '../../img/bg1.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={sidebarBg}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Varo Design
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}><a href="/">Home</a></MenuItem>
          <MenuItem icon={<FaGem />}><a href="/contact">About</a></MenuItem>
        </Menu>
        <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Work
        </div>
      </SidebarHeader>
        <Menu iconShape="circle">
            <MenuItem icon={<FaRegLaughWink/>}>Web Development</MenuItem>
          <SubMenu title={<span>Photography</span>} icon={<FaCamera/>}>
            <MenuItem>{<span>Real-Estate</span>}</MenuItem>
            <MenuItem>{<span>Food</span>}</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '24px 24px',
          }}
        >
          <a
            href="https://www.instagram.com/varo.dsgn/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            <span>varo.dsgn</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
