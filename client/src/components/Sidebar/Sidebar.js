import React from 'react';
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
`

const Sidebar = () => {
    return <>
    <Drop>
        <DropIcon to='#'>
            <FaIcons.FaBars />
        </DropIcon>
    </Drop>
    </>
};

export default Sidebar;