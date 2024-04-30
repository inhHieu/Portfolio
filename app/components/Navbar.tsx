"use client"
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHamburger, faHouse } from "@fortawesome/free-solid-svg-icons";

import SideBar from "./home/SideBar";
import Image from "next/image";

export default function Navbar({ user }: any) {
    const pathname = usePathname();
    const finalSlashIndex = pathname.lastIndexOf('/')
    const previousPathname = pathname.slice(0, finalSlashIndex)

    const [open, cycleOpen] = useCycle(false, true);
    const links = [
        { name: "Home", to: "/", id: 1 },
        { name: "Movie", to: "/movie", id: 2 },
        { name: "Game", to: "/game", id: 3 },
        { name: "Manga", to: "/manga", id: 4 }
    ];
    const hamburgerRef = useRef<HTMLDivElement>(null);
    return (
        <div className=' z-20
                 sticky top-0 left-0 w-full 
                h-14 px-6
                md:bg-black md:bg-clip-padding md:backdrop-filter md:backdrop-blur-md md:bg-opacity-50 
                md:px-10 
                xl:px-14 xl:h-20  '>
            <div ref={hamburgerRef} className=' h-6 w-6 md:hidden z-10 ' onClick={() => cycleOpen()}>
                <FontAwesomeIcon icon={faHamburger} />
            </div>
            <AnimatePresence>
                {open && (
                    <SideBar hamRef={hamburgerRef} links={links} cycleOpen={cycleOpen} />
                )}
            </AnimatePresence>
            <div className=" w-full h-full max-w-[1680px] mx-auto flex justify-between items-center">
                <div className="flex items-center place-items-center">
                    <Link href={previousPathname}>
                        <div className=' p-2 hidden md:block '>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                    </Link>
                    <span className=" w-[1px] h-4 rounded-full bg-gray-500/30 mx-2"></span>
                    <Link href={"/"}>
                        <div className=' p-2 hidden md:block '>
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                    </Link>
                    {user &&
                        <Link href={'/profile'}>
                            <div className='flex items-center gap-2 ml-2 cursor-pointer'>
                                <Image src={user?.user_metadata.avatar_url} alt=''
                                    style={{ borderRadius: '100%' }}
                                    width={30} height={30}
                                />
                                <div>{user?.user_metadata.user_name}</div>
                            </div>
                        </Link>
                    }
                </div>
                <ul className=' w-max  gap-28 hidden md:flex '>
                    {links.slice(1).map(({ name, to, id }) => (
                        <Link href={to} key={id}>
                            <motion.div>
                                {name}
                            </motion.div>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
