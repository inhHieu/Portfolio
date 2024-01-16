import React, { useRef } from 'react';
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion"

import VerticalText from './VerticalText'

interface CardProps {
    text: string;
    imageUrl: string;
}

function Card({ text, imageUrl }: CardProps) {
    return (
        <div title={`${text} Recommendations`} className='category relative h-full w-1/3 flex justify-center items-end cursor-pointer select-none z-10 '>
            <img
                src={imageUrl}
                alt={text}
            />
            <div className='mask absolute h-full w-full 
            bg-gradient-to-t from-black/90 to-black/0  '></div>
            <p className='w-max h-max absolute'>{text}</p>
        </div>
    );
}

function Category() {
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
        <section ref={targetRef} className='recommend relative w-full max-w-[1920px] m-auto  '>

            <VerticalText text="MY RECOMMEND" opacity={opacity} />

            <motion.div
                className="categories flex h-screen max-h-[1080px] mx-28"
                style={{ opacity, scale, transitionDuration:'.3s' }}
                transition={{ type: "spring"}}
            >
                {cards.map((card, index) => (
                    <Card key={index} text={card.text} imageUrl={card.imageUrl} />
                ))}
            </motion.div>
        </section>
    );
}


export default Category;