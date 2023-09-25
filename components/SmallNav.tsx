"use client"

import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useState } from "react"
import Link from "next/link"

export default function SmallNav() {
    const [isClick, setIsClick] = useState(false)
    const [isClick2, setIsClick2] = useState(false)
    return(
        <main className="items-center justify-between h-24 flex desktop:hidden px-5">
            <Image src={'/images/logo.svg'} alt="logo" width={100} height={100}/>
            <Sheet>
                <SheetTrigger><Image src={'/images/icon-menu.svg'} width={50} height={50} alt="menu"/></SheetTrigger>
                <SheetContent className="w-[325px] sm:w-[540px]">
                <main className="w-full h-full bg-background absolute top-0 right-0 py-[95px] px-16 text-secondary text-xl">
                <nav className="flex flex-col gap-2">
                    <button
                     onClick={() => setIsClick((prev) => !prev)}
                     className="flex items-center hover:text-secondary transition-colors duration-200 relative gap-4 w-full py-4">
                        <div>Features</div>
                        <Image className={"duration-300" + (isClick ? " -rotate-180" : " -rotate-0")} 
                        src={'/images/icon-arrow-down.svg'} 
                        width={15} height={15} 
                        alt={"arrow-down"} />
                    </button>
                    {  isClick && 
                    <div className="text-primary flex flex-col w-full pl-10 gap-4">
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-todo.svg'} width={25} height={25} alt="todo" />
                                <p>Todo List</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-calendar.svg'} width={25} height={25} alt="todo" />
                                <p>Calendar</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-reminders.svg'} width={25} height={25} alt="todo" />
                                <p>Reminders</p>
                            </Link>
                            <Link className="flex items-center gap-3 hover:opacity-50" href={'/'}>
                                <Image src={'/images/icon-planning.svg'} width={25} height={25} alt="todo" />
                                <p>Planning</p>
                            </Link>
                    </div>
                    }
                    <button
                     onClick={() => setIsClick2((prev) => !prev)}
                     className="flex items-center active:text-secondary transition-colors duration-200 relative gap-4 w-full py-4">
                        <div>Company</div>
                        <Image className={"duration-300" + (isClick2 ? " -rotate-180" : " -rotate-0")} 
                        src={'/images/icon-arrow-down.svg'} 
                        width={15} height={15} 
                        alt={"arrow-down"} />
                    </button>
                    {  isClick2 && 
                    <div className="text-primary flex flex-col w-full pl-10 gap-4">
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
                    }
                    <Link className="py-2 w-full" href={'/'}>Careers</Link>
                    <Link className="py-2 w-full" href={'/'}>About</Link>
                    <Link className="mt-4 py-2 w-full flex justify-center" href={'/'}>Login</Link>
                    <Link className="py-2 mt-2 w-full flex justify-center border border-secondary rounded-lg" href={'/'}>Register</Link>
                </nav>
                </main>
                </SheetContent>
            </Sheet>
        </main>
    )
}                   