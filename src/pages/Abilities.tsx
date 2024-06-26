import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiBootstrapFill  } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export function Abilities(){
    return(
        <section className="p-8 sm:mx-32 mx-auto">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center m-10">Habilidades</h1>
            <ul className="mx-auto text-orange_400 flex flex-wrap justify-center pt-20 pb-20 sm:text-6xl text-5xl md:grid grid-rows-2 md:grid-flow-col md:grid sm:gap-16 gap-32 sm:justify-between ">
                <li className="hover:text-orange_600"><FaHtml5 /></li>
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