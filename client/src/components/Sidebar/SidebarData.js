import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        
        subNav: [
            {
                title: 'Profile',
                path: '/profile',
                icon: <AiIcons.AiFillProfile />,
            },
            {
                title: 'News',
                path: '/news',
                icon: <FaIcons.FaNewspaper />,
            },
            {
                title: 'Exchanges',
                path: '/exchanges',
                icon: <FaIcons.FaExchangeAlt />,
            },
        ]
    }
]