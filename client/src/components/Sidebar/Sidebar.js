import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Drop = styled.div`
    background: #fff;
    height: 80px;   
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const DropIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem; 
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #232F3E;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false)
const showSidebar = () => setSidebar(!sidebar)


    return (
    <>
    <IconContext.Provider value= {{ color: '#black'}}>
    <Drop>
        <DropIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
        </DropIcon>
    </Drop>
    <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
        <DropIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
        </DropIcon>
        {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
        })}
        </SidebarWrap>
    </SidebarNav>
    </IconContext.Provider>
    </>
    );
};

export default Sidebar;