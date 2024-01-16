import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"

import Scroller from './Scroller'
import VerticalText from './VerticalText'

export default function Gallery() {

    const list1 = ["/img/aot.jpg", "/img/Elden.jpg", "/img/blasphemost.jpg"]

    const cards = [
        { text: "Movies", imageUrl: "/img/Lalaland.jpg" },
        { text: "Games", imageUrl: "/img/Elden.jpg" },
        { text: "Manga", imageUrl: "/img/aot.jpg" },
    ];
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end center"]
    })
    const opacity = useTransform(scrollYProgress,
        [0, 0.25, 0.75, 1],
        [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress,
        [0, 0.25, 0.75, 1],
        [0.8, 1, 1, 0.8])

    return (
        <section ref={targetRef} className=' gallery relative w-full max-w-[1920px] m-auto'>
            <VerticalText text="MY THINGS" opacity={opacity} />
            <motion.div
                style={{ opacity, scale, transitionDuration:'.3s' }}                
                className='things flex  h-screen max-h-[1080px] gap-4 mx-28 '>
                <Scroller imageUrl={list1} direction='down' speed='fast' />
                <Scroller imageUrl={list1} direction='up' speed='slow' />
                <Scroller imageUrl={list1} direction='down' speed='slow' />
                <Scroller imageUrl={list1} direction='up' speed='fast' />
            </motion.div>
        </section>
    )
}
{/* <section className=' gallery relative w-full max-w-[1920px] m-auto pb-96  '>
    <VerticalText text="MY THINGS" />
    <div className='things flex  h-screen max-h-[1080px] gap-4 mx-28 '>
        <Gallery />

    </div>
    </section> */}