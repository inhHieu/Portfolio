'use client'
import Image from 'next/image'
import { AnimatePresence } from "framer-motion";

import Landing from './components/home/Landing';
import ApearTex from './components/home/ApearText';
import Category from './components/home/Category';
import SocialMedia from './components/home/SocialMedia';
import Gallery from './components/home/Gallery';
import Comment from './components/home/Comment';

export default function Home() {


  //   useEffect(() => {
  //     const scrollers = document.querySelectorAll('.scroller');
  //     console.log(scrollers)
  //     scrollers.forEach((scroller) => {

  //         const scrollerInner = scroller.querySelector('.scroller__inner');
  //         const scrollerContent = Array.from(scrollerInner.children);

  //         scrollerContent.forEach((item) => {
  //             const duplicatedItem = item.cloneNode(true);
  //             duplicatedItem.setAttribute('aria-hidden', true);
  //             scrollerInner.appendChild(duplicatedItem);
  //         });
  //     });
  // }, []);




  // const targetRef = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start center", "end start"]
  // })

  // console.log(scrollYProgress)
  // const opacity = useTransform(scrollYProgress,
  //   [0, 0.25, 0.75],
  //   [0, 1, 0])
  // const scale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1])



  return (
    <AnimatePresence>
      <Landing />
      {/* <Bgvideo/> */}
      <ApearTex text='I might take longer to respond to your messages' />
      <ApearTex text='Instead, check out something I can do for you' />
      <Category />
      <SocialMedia />
      <Gallery />
      <Comment/>
      
    </AnimatePresence>
  )
}
