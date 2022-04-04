import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [{

    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowDropUpFill />,

},
    {
        title: 'Puzzles',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text',   
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,

        // where info of the dropdown menu will go 
        subNav:[
            {
                title: 'Matching',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            {
                title: 'Sliding Puzzle',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            {
                title: '2048',
                path: '/game-pages/My2048',
                icon: <IoIcons.IoIosSchool />,
            },
        ]
    },
    {
        title: 'Letters & Numbers',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text',   
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        
        // where info of the dropdown menu will go 
        subNav:[
            {
                title: 'Letters',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            {
                title: 'Numbers',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            {
                title: 'Spelling',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
        ]
    },
    {
        title: 'Action Adventure',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text',   
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        // where info of the dropdown menu will go 
        subNav:[
            {
                title: 'Kart',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            {
                title: 'Snake',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            {
                title: 'Tic-Tac-Toe',
                path: '/game-pages/TicTacToe',
                icon: <IoIcons.IoIosSchool />,
            },
        ]
    },
    {
        title: 'LeaderBoards',
        path: '/LeaderBoard',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text',   

    }
];


/*
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'    
    },
    {
        title: 'FirstnSecond',
        path: '/FirstnSecond',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text'    
    },
    {
        title: 'ThirdnFourth',
        path: '/ThirdnFourth',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text'    
    },
    {
        title: 'FifthnSix',
        path: '/FifthnSix',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text'   
    },
    {
        title: 'LeaderBoard',
        path: '/LeaderBoard',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text'    
    },

]
*/