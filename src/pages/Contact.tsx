import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export function Contact(){
     return(
        <section id={'contact'} className="p-8 sm:mx-32 mx-auto">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center m-10">Contato</h1>
            <div className="pt-8 pb-8">
                <ul className="text-5xl flex justify-between">
                    <li className="text-orange_400 hover:text-orange_600"><a href="https://www.instagram.com/kerleyjr28/"><FaInstagram/></a></li>
                    <li className="text-orange_400 hover:text-orange_600"><a href="https://www.linkedin.com/in/kerley-sousa-02679a14b/"><FaLinkedin /></a></li>
                    <li className="text-orange_400 hover:text-orange_600"><a href="https://github.com/Kjuh28"><FaGithub /></a></li>
                    <li className="text-orange_400 hover:text-orange_600"><a href="https://wa.me/5541988407854"><FaWhatsapp /></a></li>
                </ul>
            </div>
        </section>
    )
}