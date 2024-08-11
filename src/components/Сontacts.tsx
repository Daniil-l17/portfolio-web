import { contactsArray } from '@/constants/constants';
import Image from 'next/image';


export const Сontacts = () => {
	return (
		<div id='contacts' className=' h-[100vh] pt-[57px] snap-end'>
			<div className='flex px-3 h-full max-[600px]:justify-center max-[600px]:mt-0  flex-col mt-16 items-center gap-12 '>
				{contactsArray.map(item => {
					return (
						<a
							href={item.link}
							target='_blank'
							style={{ background: item.color }}
							className={`rounded-md gap-4 flex items-center py-2 px-4 hover:scale-110 transition-all duration-500 min-h-[70px] cursor-pointer w-full max-w-[450px]`}
						>
							<Image width={44} height={44} src={item.img} alt='' />
							<h2 className=' font-semibold text-xl'>{item.title}</h2>
						</a>
					);
				})}
			</div>
		</div>
	);
};
