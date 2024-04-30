import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Games Recommendation',
    description: 'My recommendation for games',
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
