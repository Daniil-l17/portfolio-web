'use client';

import { menuHeader } from '@/constants/constants';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Header = () => {
	const [url, setUrl] = useState<string>('');
	const pathName = usePathname();
	const { setTheme, theme } = useTheme();


  

	return (
		<header className={` fixed justify-between left-0 right-0 top-0 z-10 items-center px-9 py-3 flex`}>
			<h1 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='text-[22px] cursor-pointer font-semibold'>
				Даниил Лукьянов
			</h1>
			<div className='flex max-[800px]:hidden gap-6 items-center'>
				{menuHeader.map(function (item, key) {
					if (item.link === 'greetings') {
						if (!url.length) {
							if (pathName === '/') {
								return (
									<a onClick={() => setUrl(item.link)} key={key} className={` text-[#56a368e2] transition-all duration-300 font-semibold text-xl`} href={`#${item.link}`}>
										{item.name}
									</a>
								);
							}
						}
					}
					return (
						<a
							onClick={() => setUrl(item.link)}
							key={key}
							className={` ${item.link === url ? 'text-[#56a368e2]' : 'noActiveMenu '} transition-all duration-300 font-semibold text-xl`}
							href={`#${item.link}`}
						>
							{item.name}
						</a>
					);
				})}
			</div>
		</header>
	);
};
