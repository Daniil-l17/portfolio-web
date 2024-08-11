import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.scss';
import { ThemeProvader } from '@/provader/ThemeProvader';
import { MainLayout } from '@/layout/MainLayout';

const inter = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Web Portfolio',
	icons: {
		icon: '/avatar.svg'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<ThemeProvader>
					<MainLayout>{children}</MainLayout>
				</ThemeProvader>
			</body>
		</html>
	);
}
