import React, { useRef, useEffect } from 'react'
import { motion, useInView } from "framer-motion"

import OldPuck from '@/public/svg/oldPuck'

export default function Comment() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    // const className = `oldPuck__wrapper w-min ${isInView ? 'walk' : ''} `

    return (
        <section ref={ref}
            className=' w-full max-w-[1920px] h-44 m-auto pt-8 flex items-center'>
            <motion.div
                className={`oldPuck__wrapper mt-7 w-min ${isInView ? 'walk' : ''} `}
            >
                <OldPuck />
            </motion.div>
            <motion.p
                className=' mx-6 md:mx-28 '
                initial={{ opacity:0 }}
                whileInView={{opacity:1}}
                transition={{ delay: 5.3 }}
            >
                Yes, that not clickable and the whole page is goofy because I have no time left. Cough cough
            </motion.p>
        </section>
    )
}
