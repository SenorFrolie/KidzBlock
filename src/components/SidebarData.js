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
        title: 'FirstnSecond',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text',   
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,

        // where info of the dropdown menu will go 
        subNav:[
            {
                title: 'Game1',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            // Add addition games here **copy similar layout from subNav**
        ]
    },
    {
        title: 'ThirdnFourth',
        //path: '/ThirdnFourth',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text',   
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        
        // where info of the dropdown menu will go 
        subNav:[
            {
                title: 'Game1',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            // Add addition games here **copy similar layout from subNav**
        ]
    },
    {
        title: 'FifthnSix',
        //path: '/FifthnSix',
        icon: <IoIcons.IoIosSchool />,
        cName: 'nav-text',   
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,
        // where info of the dropdown menu will go 
        subNav:[
            {
                title: 'Game1',
                path: '/game-pages/GamePage',
                icon: <IoIcons.IoIosSchool />,
            },
            // Add addition games here **copy similar layout from subNav**
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