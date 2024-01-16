'use client'
import React, { useRef } from 'react'
import { motion } from "framer-motion"

import Indicator from './Indicator'

export default function Landing() {
    return (
        <header className=' relative h-screen w-full'>
            <div
                className=' h-full w-full flex items-center justify-center gap-40 '>
                <div
                    className='text-[40px] end'>
                    <div className='text-[64px] flex'>
                        <motion.p
                            initial={{ x: "750%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                opacity: { duration: .3 },
                                x: { ease: "circInOut", duration: .5, delay: 2 }
                            }}
                        >Hi</motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 2.2, duration: .3 } }}
                        >,&nbsp;I&apos;m Hieu</motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 2.8, duration: .3 } }}>
                        <p>I&apos;m currently serving in</p>
                        <p>the military for the next 2 years</p>
                    </motion.div>
                </div>
                <motion.div className='h-80 w-60  '
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
