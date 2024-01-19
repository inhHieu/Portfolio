'use client'
import React, { useRef } from 'react'
import { motion } from "framer-motion"

import Indicator from './Indicator'

export default function Landing() {
    return (
        <header className=' relative h-screen w-full'>
            <div className=' h-full w-full flex items-center justify-center gap-40 '>
                <div className='text-3xl end mx-8'>
                    <div className=' relative text-5xl sm:text-6xl flex w-full '>
                        <motion.p className=' absolute text-right inset-0 bg-black '
                            initial={{ opacity: 0, width:"100%" }}
                            animate={{  opacity: 1, width: "0"}}
                            transition={{
                                opacity: { duration: .3 },
                                // width: { duration: .5, delay: 2},
                                width: { ease: "circInOut", duration: .5, delay: 2 }
                            }}
                        >Hi</motion.p>
                        <p className=' text-black/0 '>Hi</p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 2.2, duration: .3 } }}
                        >,&nbsp;I&apos;m Hieu</motion.p>
                    </div>
                    <motion.div className='pt-2 md:pt-0'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 2.8, duration: .3 } }}>
                        <p>I&apos;m currently serving in</p>
                        <p>the military until 2026</p>
                    </motion.div>
                </div>
                <motion.div className=' hidden h-80 w-60
                lg:block
                '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.8, duration: .3 } }}
                    style={{
                        backgroundImage: "url(/img/Elden.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: 'cover'
                    }}>
                </motion.div>
            </div >
            {/* <Indicator /> */}
        </header>
    )
}
