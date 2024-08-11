'use client'
import { technologiesArray } from '@/constants/constants';

export const Technologies = () => {
	return (
		<div id='technologies' className=' relative flex justify-center items-center min-h-[100vh] snap-end '>
			<div className='w-full max-w-[1700px] justify-center flex m-auto gap-6 flex-wrap'>
				{technologiesArray.map((item, index) => {
					return (
						<div onClick={() => window.open(item.link)} key={index} className='card'>
							<a className='text-current no-underline'>
								<div className='icon !w-[70px] rounded-[50%] !h-[70px]'>
									<img width={40} src={`${item.img}`} alt='' />
								</div>
								<p className='title font-semibold text-current'>{item.title}</p>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};
