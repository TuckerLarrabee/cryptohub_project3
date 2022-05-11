import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Sidebarlink = styled(Link)`
    display: flex; 
    color: #e1e9fc;
`

const Submenu = () => {
    return (
        <>
        <SidebarLink to={item.path}>
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
        </SidebarLink>
        </>
    )
}

export default Submenu