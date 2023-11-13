/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsFillArrowLeftSquareFill, BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillEnvironment, } from "react-icons/ai";

const Sidebar = () => {

    const [open, setOpen] = useState(true)

    const [openSubMenu, setOpenSubMenu] = useState(false)
    
    const Menus = [
        { title: "Dashboard" },
        { title: "Pages" },
        { title: "Media", spacing: true },
        {
            title: "Projects",
            subMenu: true,
            subMenuItems: [
                { title: "Submenu 1" },
                { title: "Submenu 2" },
                { title: "Submenu 3" }

            ]
        },
        { title: "Analytics" },
        { title: "Inbox" },
        { title: "Profile", spacing: true },
        { title: "Logout" },

    ]

    return (
        <div className='flex'>
            <div className={`bg-dark-purple p-5 pt-8 h-screen  ${open ? "w-72" : "w-20"}  relative duration-300`} >

                <BsFillArrowLeftSquareFill
                    className={`text-white bg-dark-purple text-2xl absolute -right-3 border border-dark-purple rounded-xl cursor-pointer ${!open && "rotate-180"} `}
                    onClick={() => setOpen(!open)} />

                <div className='inline-flex items-center gap-3'>
                    <AiFillEnvironment className='bg-amber-300 text-4xl rounded cursor-pointer' />
                    <h1 className={`text-white font-medium text-2xl duration-300 ${!open && "hidden"}`}>Tailwind</h1>
                </div>

                <div className={`flex items-center rounded-md bg-light-white mt-6 ${open ? "px-4" : "px-2.5"}  py-2`}>
                    <BsSearch className={`text-white text-lg cursor-pointer ${open ? "mr-2" : ""}`} />
                    <input className={`bg-transparent w-full focus:outline-none ${!open && "hidden"}`} />
                </div>

                {/* menu items  */}
                <ul className='pt-2'>
                    {
                        Menus.map((item, index) => (
                            <>
                                <li key={index} className={`text-gray-300 p-2 hover:bg-light-white rounded-md flex items-center gap-x-4 ${item?.spacing ? "mt-9 " : "mt-2"}`}>
                                    <RiDashboardFill className='text-2xl' />
                                    <span className={`${!open && "hidden"} `}>{item?.title}</span>
                                    {
                                        item?.subMenu && <BsChevronDown className={`${!open && "hidden"} absolute right-5 mr-2 ${openSubMenu && "rotate-180" }`} onClick={() => setOpenSubMenu(!openSubMenu)} />
                                    }
                                </li>
                                {
                                    openSubMenu && (
                                        <ul>
                                            {item?.subMenuItems?.map((element, index) => (
                                                <li
                                                    className={`text-gray-300 p-2 hover:bg-light-white rounded-md flex items-center gap-x-4 px-5`}>
                                                    {element?.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                }
                            </>
                        ))
                    }
                </ul>

            </div>


            <div className='p-7' >
                <h1 className='text-2xl font-bold'>Home page</h1>
            </div>


        </div>
    )
}

export default Sidebar