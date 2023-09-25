"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LargeNav(){
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    return(
        <main className="items-center justify-between h-20 hidden desktop:flex z-50">
            <nav className="flex items-center gap-12">
                <Image src={'/images/logo.svg'} width={100} height={100} alt="logo" className="cursor-pointer"/>
                <div className="flex items-center gap-5 text-lg">
                    <button
                     onMouseEnter={() => setIsHover1(true)}
                     onMouseLeave={() => setIsHover1(false)}
                     className="p-5 flex items-center gap-2 group hover:text-secondary transition-colors duration-200 relative z-50">
                        <p>Features</p>
                        <Image className="group-hover:-rotate-180 duration-300" 
                        src={'/images/icon-arrow-down.svg'} 
                        width={15} height={15} 
                        alt={"arrow-down"} />
                        <div className={"absolute -bottom-44 px-6 py-5 -left-9 text-primary flex-col gap-3 rounded-lg shadow-2xl overflow-hidden z-50 "
                        +  (isHover1 ? " flex" : " hidden")}>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-todo.svg'} width={20} height={20} alt="todo" />
                                <p>Todo List</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-calendar.svg'} width={20} height={20} alt="todo" />
                                <p>Calendar</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-reminders.svg'} width={20} height={20} alt="todo" />
                                <p>Reminders</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-planning.svg'} width={20} height={20} alt="todo" />
                                <p>Planning</p>
                            </Link>
                        </div>
                    </button>
                    <button
                     onMouseEnter={() => setIsHover2(true)}
                     onMouseLeave={() => setIsHover2(false)}
                     className="p-5 flex items-center gap-2 group hover:text-secondary transition-colors duration-200 relative z-50">
                        <p>Company</p>
                        <Image className="group-hover:-rotate-180 duration-300"
                        src={'/images/icon-arrow-down.svg'} 
                        width={15} height={15} 
                        alt={"arrow-down"} />
                        <div className={"absolute -bottom-32 px-6 py-5 left-0 text-primary flex-col gap-3 rounded-lg shadow-2xl overflow-hidden z-50 "
                        +  (isHover2 ? " flex" : " hidden")}>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <p>History</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <p>Our Team</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <p>Blog</p>
                            </Link>
                        </div>
                    </button>
                    <button className="p-5 hover:text-secondary transition-colors duration-200">Career</button>
                    <button className="p-5 hover:text-secondary transition-colors duration-200">About</button>
                </div>
            </nav>
            <div className="flex items-center w-1/4  justify-end gap-6">
                <button className="py-2 px-4 hover:text-secondary transition-colors duration-200"
                >Login</button>
                <button className=" py-2 px-4 rounded-2xl border-2 border-primary text-primary hover:text-secondary hover:border-secondary transition-colors duration-200"
                >Register</button>
            </div>
        </main>
    )
}