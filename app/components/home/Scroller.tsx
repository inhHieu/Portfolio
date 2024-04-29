import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ScrollerProps {
    imageUrl: string[];
    direction: string;
    speed: string;
}

export default function Scroller({ imageUrl, direction, speed }: ScrollerProps) {
    const scroller__innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollerInner = scroller__innerRef.current;
        if (scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                duplicatedItem.setAttribute('aria-hidden', 'true');
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    }, []);

    return (
        <div className="scroller w-full " data-direction={direction} data-speed={speed}>
            <div ref={scroller__innerRef} className="scroller__inner w-full flex flex-col gap-4 relative ">
                {imageUrl.map((url, i) => (
                    <Image
                        key={i} src={url}
                        style={{width:'100%', height:'100%' }}
                        width={1980} height={1080}
                        alt="things"
                    />
                ))}
            </div>
        </div>
    );
}