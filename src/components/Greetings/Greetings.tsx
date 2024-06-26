import style from './greetings.module.scss'

const stack = [
  {name: 'Long=True.png', link: 'https://www.typescriptlang.org'},
  {name: 'redux.png', link: 'https://redux-toolkit.js.org'},
  {
    name: 'react.png',
    link: 'https://react.dev/blog/2023/03/16/introducing-react-dev',
  },
  {name: 'dsdsdsv.svg', link: 'https://www.w3schools.com/html'},
  {name: 'Type=Default.png', link: 'https://tailwindcss.com'},
  {name: 'Type=Default.svg', link: 'https://learn.javascript.ru/'},
] as const

export const Greetings = () => {
  return (
    <div className={style.greetings}>
      <div className="flex max-[400px]:mt-4 flex-col ">
        <div className="flex items-center gap-20 max-[900px]:gap-0 max-[730px]:flex-col-reverse ">
          <div className={`${style.lefGreetings} max-[1060px]:w-[420px] max-[460px]:w-auto `}>
            <div className="max-[730px]:mt-4">
              <h2 className=" max-[1060px]:text-4xl max-[730px]:text-2xl text-6xl w-[560px] font-extrabold max-[730px]:w-auto max-[730px]:text-center">
                Front-End React
              </h2>
              <h2 className="text-5xl max-[730px]:text-2xl max-[1060px]:text-4xl mt-3 font-extrabold max-[730px]:w-auto max-[730px]:text-center">
                Разработчик 👋🏻
              </h2>
            </div>
            <p className="max-[730px]:text-center max-[730px]:w-auto max-[1060px]:w-[380px] mt-6 font-medium w-[550px] text-[#7d7c7e]">
              Привет, меня зовут Даниил Лукьянов. Я Фронтенд-разработчик,
              специализирующийся на ReactJS, NextJS, TypeScript.
            </p>
            <div className="flex items-center gap-4 mt-4 max-[730px]:justify-center">
              <a href="https://github.com/Daniil-l17" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 15 15"
                  className="w-8 scaleHover cursor-pointer"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    color="black"
                    fill="currentColor"
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.codewars.com/users/Daniil-l17"
              >
                <img
                  className="scaleHover"
                  width={45}
                  src="/5387632.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="hover-image-scale z-[2]">
            <img
              className=" hoverAvatar rounded-[50%] max-[1060px]:w-[250px] max-[1060px]:h-[250px]"
              width={350}
              loading='lazy'
              height={350}
              src="/photo_2024-04-26_19-54-44vsdvssa.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" flex gap-4 justify-start max-[1060px]:mt-4  max-[730px]:flex-col items-center">
          <h2 className="text-lg max-[1060px]:text-base ">
            Технический Стэк |{' '}
          </h2>
          <div className="flex items-center gap-6">
            {stack.map((item, index) => (
              <a key={index} target="_blank" href={item.link}>
                <img
                  className="scaleHover max-[1060px]:w-[23px]"
                  width={35}
                  src={`/${item.name}`}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
