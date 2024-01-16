import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"

interface ApearTextProps {
    text: string;
}

export default function ApearTex({ text }: ApearTextProps) {


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
        <section ref={targetRef} className=' min-h-screen w-full grid place-items-center text-[40px] '>
            <div className='w-fit m-auto text-center'>
                {/* <p className=' -mt-9 '>So</p> */}
                <div className='h-[170vh] '>
                    <motion.p
                        className='fixed top-1/2 left-1/2 w-max'
                        style={{
                            opacity, scale,
                            transitionDuration: '.3s',
                            y: '-50%', x: '-50%'
                        }}
                    >{text}</motion.p>
                </div>
            </div>
        </section>)
}
