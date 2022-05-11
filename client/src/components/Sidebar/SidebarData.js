import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Profile',
                path: '/overview/profile',
                icon: <AiIcons.AiFillProfile />,
            },
            {
                title: 'News',
                path: '/overview/news',
                icon: <FaIcons.FaNewspaper />,
            },
            {
                title: 'Exchanges',
                path: '/overview/exchanges',
                icon: <FaIcons.FaExchangeAlt />,
            },
        ]
    }
]