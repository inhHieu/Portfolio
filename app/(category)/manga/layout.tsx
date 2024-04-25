import React, { ReactNode } from 'react';
import type { Metadata } from 'next'


interface LayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: 'Manga Recommendation',
    description: 'My manga recommendation',
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            {children}
        </>
    );
}