import { Button } from "../components/Button";

export function Navbar(){
    return(
        <nav className="w-full sticky bg-black top-0">
            <div className="font-bold sm:mx-24 sm:text-6xl text-3xl flex justify-between p-4 sm:p-8">
                <h2>Portifolio</h2>
                <h2 className="text-orange_400 hover:text-orange_600 cursor-pointer"><Button txt={'Contato'} /></h2>
            </div>
        </nav>
    )
}