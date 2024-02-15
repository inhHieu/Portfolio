"use client"
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome, faHamburger } from "@fortawesome/free-solid-svg-icons";

import SideBar from "./SideBar";

export default function Navbar() {
    const [open, cycleOpen] = useCycle(false, true);
    const links = [
        { name: "Home", to: "/", id: 1 },
        { name: "Movie", to: "/movie", id: 2 },
        { name: "Game", to: "/game", id: 3 },
        { name: "Manga", to: "/manga", id: 4 }
    ];

    return (
        <div className='   z-20
    flex justify-between items-center sticky top-0 left-0 w-full 
    h-14 px-6
    md:px-10 
    md:bg-black md:bg-clip-padding md:backdrop-filter md:backdrop-blur-md md:bg-opacity-50 
    xl:px-14 xl:h-20  '>
            <div className=' h-6 w-6 md:hidden z-10 ' onClick={() => cycleOpen()}>
                <FontAwesomeIcon icon={faHamburger} />
            </div>
            <AnimatePresence>
                {open && (
                    <SideBar links={links} cycleOpen={cycleOpen} />
                )}
            </AnimatePresence>
            <div className=' h-6 w-6 hidden md:block '>
                <FontAwesomeIcon icon={faArrowLeft} />
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
    )
}
