export function Profile(){
    return(
        <section id="profile" className="mx-auto p-8 sm:mx-64   ">
            <div className="place-items-center sm:my-48 sm:flex sm:justify-between text-center sm:text-start">
                <div className="max-w-xl ">
                    <p className="text-3xl flex flex-col gap-4">Olá, eu sou o <a className="font-bold text-5xl text-orange_400 sm:hover:text-orange_600" href='#'>Kerley Sousa</a> Desenvolvedor Front-end  </p>
                </div>
                <div className="max-w-xl flex justify-center">
                    <img src="../src/assets/avatar500.png" className="max-w-52" ></img>
                </div>
            </div>
            
        </section>
    )
}