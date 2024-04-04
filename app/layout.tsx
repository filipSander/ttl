import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import '@/assets/scss/style.scss'
import Header from '@/shared/ui/header/header'
import Footer from '@/shared/ui/footer/footer'
import Providers from './providers'

const inter = Ubuntu({ subsets: ['cyrillic'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
	title: 'TTL - Транспорт таможенная логистика',
	description: 'Транспорт таможенная логистика'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
