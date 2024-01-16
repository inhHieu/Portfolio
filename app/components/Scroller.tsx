
import React, { useEffect, useRef } from 'react';

interface ScrollerProps {
    imageUrl: string[];
    direction: string;
    speed: string;
}

export default function Scroller({ imageUrl, direction, speed }: ScrollerProps) {
    const scroller__innerRef = useRef();

    useEffect(() => {
        const scrollerInner = scroller__innerRef.current;
        if (scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    }, []);

    return (
        <div className="scroller w-1/4 " data-direction={direction} data-speed={speed}>
            <div ref={scroller__innerRef} className="scroller__inner w-full flex flex-col gap-4 ">
                {imageUrl.map((url, i) => ( // Use parentheses instead of curly braces for the map function
                    <img key={i} src={url} alt="" />
                ))}
            </div>
        </div>
    );
}