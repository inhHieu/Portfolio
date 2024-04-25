import React, { ReactNode } from 'react';
import type { Metadata } from 'next'


interface LayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: 'Movie Recommendation',
    description: 'My movie recommendation inhhieu portfolio',
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            {children}
        </>
    );
}