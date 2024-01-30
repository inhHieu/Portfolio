import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import Zalo from '@/public/svg/zalo';

export default function SocialMedia() {



    return (
        <section
            className=' w-full relative max-w-[1920px] m-auto h-96 '>
            <motion.div
                className=' flex items-center justify-center h-full 
                md:mx-28 '
            >
                {/* <p className=' text-center mb-4 '>MY SOCIAL</p> */}
                <motion.ul
                    className=' flex flex-wrap gap-14 justify-center '
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transitionDuration: '.3s' }}
                    viewport={{ once: true }}>

                    <li className=' w-10 h-10 ' title='github'>
                        <Link href="https://github.com/inhHieu" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className=' w-full h-full' />
                        </Link>
                    </li>
                    <li className=' w-10 h-10 scale-[1.1] ' title='zalo'>
                        <Link href="https://vercel.com/hieus-projects-e1da71c1/portfolio" target="_blank">
                            <Zalo />
                        </Link>
                    </li>
                    <li className=' w-10 h-10 ' title='instagram'>
                        <Link href="https://www.instagram.com/mhieu31/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className=' w-full h-full' />
                        </Link>
                    </li>
                    <li className=' w-10 h-10 ' title='facebook'>
                        <Link href="https://www.facebook.com/inhHieu13" target="_blank">
                            <FontAwesomeIcon icon={faSquareFacebook} className=' w-full h-full' />
                        </Link>
                    </li>
                    
                </motion.ul>
            </motion.div>
        </section>
    )
}
