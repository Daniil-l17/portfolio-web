export const Greetings = () => {
	return (
		<div id='greetings' className='snap-center px-4 w-full max-w-[1050px] m-auto flex justify-center items-center h-[100vh]'>
			<div className={`flex-1 justify-center items-center flex-col flex `}>
				<div className=''>
					<h2 className='max-[800px]:text-center text-6xl max-[450px]:text-4xl font-extrabold '>Front-End React</h2>
					<h2 className='max-[800px]:text-center text-center text-5xl max-[450px]:text-3xl mt-3 font-extrabold '>Разработчик 👋🏻</h2>
				</div>
				<h2 className='max-[800px]:text-center max-[600px]:text-sm mt-6 font-medium text-center w-full max-w-[550px] text-[#7d7c7e]'>
					Привет, меня зовут Даниил Лукьянов. Я Фронтенд-разработчик, специализирующийся на ReactJS, NextJS, TypeScript. Последние года я изучаю веб-программирование, совершенствую
					свои навыки и выполняю любые проекты.
				</h2>
				<div className='flex items-start gap-4 mt-4 '>
					<a
						className='font-medium px-4 py-[8px] hover:scale-105 transition-all duration-300 rounded-[6px] text-white bg-[#5858588b]'
						href='https://hh.ru/resume/71080242ff0ce70c0c0039ed1f535972533641'
						target='_blank'
					>
						посмотреть резюме
					</a>
				</div>
			</div>
		</div>
	);
};
