export const Bio = () => {
	return (
		<div id='bio' className='h-[100vh] flex justify-center items-center snap-center'>
			<div className={'bio'}>
				<div className='flex gap-6 mb-3'>
					<div className='flex items-center gap-2'>
						<span className=' w-3 h-3 rounded-xl bg-[#ff0000]'></span>
						<span className=' w-3 h-3 rounded-xl bg-[#00ff00]'></span>
					</div>
					<h4 className=' select-none cursor-pointer font-semibold text-[#5a6bed]'>Bio.tsx</h4>
				</div>
				<p className=' mb-3 selection:text-[#85eb9f] selection:bg-[#46574b]'>
					Мне нравиться создавать красивые и сложные проекты, делать анимацию и логику. Мой основной стек: TypeScript, ReactJS и NextJS.
				</p>
				<p className=' mb-3 selection:text-[#85eb9f] selection:bg-[#46574b]'>
					Люблю разбираться в сложных проектах, продумывать логику, от запроса данных до рендора. Во время разработки важную часть уделяю визуальным составляющим и красоте кода.
					Каждый день стараюсь совершенствовать навыки и повышать уровень знаний.
				</p>
				<p className='selection:text-[#85eb9f] mb-2 selection:bg-[#46574b]'>Также фанат оптимизации, фундаментального подхода и кофе.</p>
			</div>
		</div>
	);
};
