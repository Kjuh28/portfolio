export function Profile(){
    return(
        <section id="profile" className="mx-auto p-8 sm:mx-32">
            <div className="place-items-center sm:my-8 sm:flex sm:justify-between text-center sm:text-start">
                <div className="max-w-xl w-full ">
                    <p className="sm:text-4xl text-3xl flex flex-col gap-4">Olá, eu sou o <a className="font-bold text-3xl sm:text-6xl text-orange_400 sm:hover:text-orange_600" href='#'>Kerley Sousa</a> Desenvolvedor Front-end  </p>
                </div>
                <div className="max-w-xl w-full">
                    <img src="../src/assets/avatar500.png" className="" ></img>
                </div>
            </div>
            
        </section>
    )
}