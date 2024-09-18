import Image from 'next/image';

export const Greetings = () => {
	return (
		<div
			id='greetings'
			className='snap-center max-[800px]:flex-col-reverse max-[800px]:pt-[130px] px-4 w-full max-w-[1050px] max-[800px]:gap-6 m-auto gap-14 flex justify-center items-center h-[100vh]'
		>
			<div className={`flex-1 max-[800px]:items-center flex-col flex `}>
				<div className=''>
					<h2 className='max-[800px]:text-center text-6xl max-[1000px]:text-4xl font-extrabold '>Front-End React</h2>
					<h2 className='max-[800px]:text-center text-5xl max-[1000px]:text-3xl mt-3 font-extrabold '>Разработчик 👋🏻</h2>
				</div>
				<h2 className='max-[800px]:text-center max-[1000px]:text-sm mt-6 font-medium w-full max-w-[550px] text-[#7d7c7e]'>
					Привет, меня зовут Даниил Лукьянов. Я Фронтенд-разработчик, специализирующийся на ReactJS, NextJS, TypeScript. Последние года я изучаю веб-программирование, совершенствую
					свои навыки и выполняю любые проекты.
				</h2>
				<div className='flex items-start gap-4 mt-4 '>
					<a
						className='font-medium px-4 py-[8px] hover:scale-105 transition-all duration-300 rounded-[6px] text-white bg-[#5858588b]'
						download={true}
						href='./Лукьянов Даниил Витальевич (1).doc'
					>
						Скачать резюме
					</a>
				</div>
			</div>
			<div className='overflow-hidden rounded-[12%] z-[2]'>
				<Image
					className=' hoverAvatar border-[1px] border-[#ffffff24] max-[800px]:w-[250px] max-[800px]:h-[250px] rounded-[12%] w-[360px] h-[360px]'
					width={360}
					priority={true}
					height={360}
					src='/photo_2024-09-18_16-00-32 (2).jpg'
					alt='logo'
				/>
			</div>
		</div>
	);
};
