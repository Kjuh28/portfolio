import { Button } from "../components/Button";

export function Profile(){
    return(
        <section id="profile" className="mx-auto p-8 sm:mx-32">
            <div className="place-items-center sm:my-8 grid lg:flex xl:justify-between text-center lg:text-start">
                <div className="max-w-xl w-full ">
                    <p className="sm:text-4xl text-3xl flex flex-col gap-4">Olá, eu sou o <a className="font-bold text-3xl sm:text-6xl text-orange_400 sm:hover:text-orange_600" href='https://github.com/Kjuh28' target="_blank" rel="noopener">Kerley Sousa</a> Desenvolvedor Full Stack  </p>
                    <footer className="pt-8"><a href="https://drive.google.com/file/d/1MRJ2IRjBi5YT4nQKQ1doUxPTPUu0VrcK/view?usp=drive_link" download target="_blank" rel="noopener"><Button tittle='Download CV' /> </a></footer>
                </div>
                <div className="max-w-xl w-full flex justify-center">
                    <img src="https://raw.githubusercontent.com/Kjuh28/portfolio/main/src/assets/avatar500.png" className="" ></img>
                </div>
            </div>   
        </section>
    )
}