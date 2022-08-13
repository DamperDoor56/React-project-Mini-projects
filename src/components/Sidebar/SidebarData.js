import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsListCheck } from 'react-icons/bs';
import { GiRomanToga, GiArchiveResearch } from 'react-icons/gi'


export const SidebarData =[
    {
        title: "Home",
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "To Do List",
        path: '/',
        icon: <BsListCheck />,
        cName: 'nav-text'

    },
    {
        title: "Roman Number Converter",
        path: '/',
        icon: <GiRomanToga />,
        cName: 'nav-text'
    },
    {
        title: "Caesar Cipher",
        path: '/',
        icon: <GiArchiveResearch />,
        cName: 'nav-text'
    },
]

export default SidebarData;