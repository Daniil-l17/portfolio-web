'use client';

import { menuHeader } from '@/constants/constants';

import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BurgerMenu } from './BurgerMenu';
import Link from 'next/link';

export const Header = () => {
	const [url, setUrl] = useState<string>('');
	const pathName = usePathname();
	const { setTheme, theme } = useTheme();
	const router = useRouter();
	const [activeMenu, setActiveMenu] = useState(false);

	useEffect(() => {
		router.push('/');
	}, []);

	return (
		<header className={` fixed justify-between max-[800px]:px-4 left-0 right-0 top-0 z-10 items-center px-9 py-3 flex`}>
			<h1 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='text-[22px] hoverItem hover:scale-110 cursor-pointer font-semibold'>
				Даниил Лукьянов
			</h1>
			<BurgerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
			<div className={`flex mobileMenu gap-6 z-[60] hoverItem items-center ${activeMenu ? 'right-3' : 'right-[-400px]'}`}>
				{menuHeader.map(function (item, key) {
					if (item.link === 'greetings' && !url.length && pathName === '/') {
						return (
							<Link onClick={() => setUrl(item.link)} key={key} className={` text-[#56a368e2] z-[7] font-semibold text-xl`} href={`#${item.link}`}>
								{item.name}
							</Link>
						);
					}
					return (
						<Link
							onClick={() => setUrl(item.link)}
							key={key}
							className={` ${item.link === url ? 'text-[#56a368e2] ' : 'noActiveMenu hover:scale-110 '} z-[7] hoverItem font-semibold text-xl`}
							href={`#${item.link}`}
						>
							{item.name}
						</Link>
					);
				})}
			</div>
		</header>
	);
};
