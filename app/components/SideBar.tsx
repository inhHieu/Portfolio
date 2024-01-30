import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";


interface Link {
    name: string;
    to: string;
    id: number;
}

interface SideBarProps {
    links: Link[];
    cycleOpen: () => void;
}
export default function SideBar({ links, cycleOpen }: SideBarProps) {

    const itemVariants = {
        closed: {
            opacity: 0,

        },
        open: { opacity: 1 }
    };

    const sideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    };

    return (
        <motion.aside className=' bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 
                    absolute h-dvh w-[200px] top-0 left-0 
                    md:hidden'
            initial={{ width: 0, }}
            animate={{ width: 200 }}
            exit={{
                width: 0,
                transition: { delay: 0.3, duration: .3 }
            }}
            transition={{ type: "spring", bounce: 0 }}
        >
            <motion.div
                className=" container flex flex-col  pt-20  "
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
            >
                {links.map(({ name, to, id }) => (
                    <Link href={to} onClick={cycleOpen} key={id}>
                        <motion.div
                            className="   px-6 py-4 "
                            whileHover={{ scale: 1.1 }}
                            variants={itemVariants}
                        >
                            {name}
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </motion.aside>
    )
}
