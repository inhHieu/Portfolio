import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Movie Recommendation',
    description: 'My recommendation for movies',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
