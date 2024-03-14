import React from 'react';

export default function BgVideo() {
    return (
        <video preload="metadata" autoPlay loop muted
            className=' bgvideo h-full -z-50 fixed top-0 right-0 opacity-10 '
        >
            <source src="/video/bg.mp4" type="video/mp4" />
        </video>
    );
}