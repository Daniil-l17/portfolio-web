'use client';

import { Dispatch, SetStateAction } from 'react';

export const BurgerMenu = ({ setActiveMenu, activeMenu }: { setActiveMenu: Dispatch<SetStateAction<boolean>>; activeMenu: boolean }) => {
	return (
		<div className='burgerIcon' onClick={() => setActiveMenu(prev => !prev)}>
			{!activeMenu ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					style={{ width: '30px', height: '30px', cursor: 'pointer' }}
					stroke='currentColor'
					className='size-6 w-4 h-4 '
				>
					<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
				</svg>
			) : (
				<svg
					style={{ width: '30px', height: '30px', cursor: 'pointer' }}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6'
				>
					<path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
				</svg>
			)}
		</div>
	);
};
