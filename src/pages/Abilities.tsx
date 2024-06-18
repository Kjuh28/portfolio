import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiBootstrapFill  } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export function Abilities(){
    return(
        <section className="p-8 sm:mx-64 mx-auto">
            <h1 className=" text-3xl sm:text-7xl font-bold text-center m-10">Habilidades</h1>
            <ul className="mx-auto sm:text-7xl text-5xl pt-20 pb-20 md:grid md:grid-rows-2 md:grid-flow-col gap-16 flex flex-wrap sm:justify-between justify-around text-gradient-to-r from-orange_400 to-orange_800">
                <li><FaHtml5 /></li>
                <li><FaCss3 /></li>
                <li><FaJs /></li>
                <li><FaReact /></li>
                <li><RiTailwindCssFill /></li>
                <li><RiBootstrapFill /></li>
                <li><SiTypescript /></li>
                <li><RiNextjsFill /></li>

            </ul>
        </section>
    )
}