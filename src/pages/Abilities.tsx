import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiBootstrapFill  } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export function Abilities(){
    return(
        <section className="sm:mx-64 mx-auto">
            <h1 className=" text-4xl sm:text-5xl font-bold text-center m-10">Habilidades</h1>
            <ul className="sm:text-7xl mt-20 flex justify-between flex-wrap text-orange_400">
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