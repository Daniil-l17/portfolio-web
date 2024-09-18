'use client';
import { technologiesArray } from '@/constants/constants';
import Link from 'next/link';

export const Technologies = () => {
	return (
		<div id='technologies' className=' relative flex justify-center items-center min-h-[100vh] snap-end '>
			<div className='w-full max-w-[1700px] justify-center flex gap-6 flex-wrap'>
				{technologiesArray.map((item, index) => {
					return (
						<Link href={item.link} target='_blank' key={index} className='card z-[5] border-[1px] border-[#ffffff0b]'>
							<div className='text-current no-underline'>
								<div className='icon !w-[70px] rounded-[50%] !h-[70px]'>
									<img width={40} src={`${item.img}`} alt='' />
								</div>
								<p className='title font-semibold text-current'>{item.title}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
