import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Drop = styled.div`
    background: #fafafa;
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
    background: #fafafa;
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
        </SidebarWrap>
    </SidebarNav>
    </>
    );
};

export default Sidebar;