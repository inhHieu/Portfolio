import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Manga Recommendation',
    description: 'My recommendation for manga',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className=' max-w-[1440px]'>
            {children}
        </div>
    )
}
