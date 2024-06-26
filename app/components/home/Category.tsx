import React, { useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { motion, useScroll, useTransform } from "framer-motion"

import VerticalText from './VerticalText'

interface CardProps {
    text: string;
    imageUrl: string;
    link: string;
}

function Card({ text, imageUrl, link }: CardProps) {
    return (
        <Link title={`${text} Recommendations`}
            href={link}
            className='category relative flex cursor-pointer select-none z-10
        h-full w-full justify-center items-center object-center  
        md:h-full md:w-1/3 md:justify-center md:items-end 
        '>
            <div className=' relative w-full h-full  '>
                <Image src={imageUrl} fill={true} style={{objectFit:'cover'}} alt={text} />
            </div>
            <div className='mask absolute h-full w-full 
            bg-black/40 md:bg-transparent
            md:bg-gradient-to-t md:from-black/90 md:to-black/0  '></div>
            <p className='w-max h-max absolute text-xl md:text-3xl font-semibold '>{text}</p>
        </Link>
    );
}

function Category() {
    const cards = [
        { text: "Movies", imageUrl: "/img/Lalaland.jpg", link: "/movie" },
        { text: "Games", imageUrl: "/img/Elden.jpg", link: "game" },
        { text: "Manga", imageUrl: "/img/aot.jpg", link: "manga" },
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
        <section ref={targetRef} className='recommend relative h-screen w-full max-w-[1920px] m-auto   '>

            <VerticalText text="MY RECOMMEND" opacity={opacity} />

            <motion.div
                className="categories flex flex-col w-full h-4/5 max-h-[1080px] gap-2 px-2
                md:flex-row md:gap-0 md:w-auto md:mx-28
                lg:h-screen
                "
                style={{ opacity, scale, transitionDuration: '.3s' }}
                transition={{ type: "spring" }}
            >
                {cards.map((card, index) => (
                    <Card key={index} text={card.text} imageUrl={card.imageUrl} link={card.link} />
                ))}
            </motion.div>
        </section>
    );
}
// flex h-screen max-h-[1080px] mx-28

export default Category;