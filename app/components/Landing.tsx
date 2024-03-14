'use client'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

import Indicator from './Indicator'
import BgVideo from './Bgvideo'

export default function Landing() {


    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <>
            <header ref={ref} className=' relative h-screen w-full'>
                <div className=' h-full w-full md:w-4/5 mx-auto flex items-center justify-center '>
                    <div className='text-3xl end mx-8 md:mx-0 '>
                        <div className=' relative text-5xl sm:text-6xl flex w-full '>
                            <motion.p className=' absolute text-center  inset-0 bg-black '
                                initial={{ opacity: 0, width: "100%" }}
                                animate={{ opacity: 1, width: "0" }}
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
                    <motion.div className=' hidden h-80 w-0  
                lg:block
                '
                        initial={{ opacity: 0, marginLeft: "0px", }}
                        animate={{ width: '200px', marginLeft: "100px", opacity: 1 }}
                        transition={{
                            width: { delay: 2.8, duration: .3 },
                            marginLeft: { delay: 2.8, duration: .3 },
                            opacity: { delay: 3.2, duration: .7 }
                        }}
                        style={{
                            backgroundImage: "url(/img/me.jpg)",
                            backgroundPosition: "center",
                            backgroundSize: 'cover'
                        }}>
                    </motion.div>
                </div >
                {/* <Indicator /> */}
            </header>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: !isInView ? 1 : 0 }}
                transition={{ duration: 2 }}
            >
                {!isInView && <BgVideo />}
            </motion.div>
        </>
    )
}
