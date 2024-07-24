import { useState } from "react"
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiBootstrapFill  } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export interface abilityProps {
    title: string,
    tagIcon: string,
    description: string
}


export function Collapse({title, tagIcon, description}){
    const [openAccordion, setOpenAccordion] = useState(false)

    return(
        <>
            <div className='text-xl sm:text-3xl grid'>
                <button className='grid' onClick={() => setOpenAccordion(!openAccordion)}>{tagIcon}</button>
                <div className={`text-white text-center grid transition-all duration-300 ease-in-out overflow-hidden ${openAccordion ? 'grid-rows[1fr] opacity-100' : 'grid-rows[0fr] opacity-0' }`} >
                    <div className='overflow-hidden max-w-sm p-4'>
                        <h2 className="text-orange_400 mt-2 sm:mt-4">{title}</h2>
                        <p className="text-justify">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <FaHtml5 />
<FaCss3 />
<FaJs />
<FaReact />
<RiTailwindCssFill />
<RiBootstrapFill />
<SiTypescript />
<RiNextjsFill /> */}