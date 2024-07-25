import { useState } from "react"
export interface abilityProps {
    title: string,
    tagIcon: string,
    description: string
}


export function Collapse({title, tagIcon, description}){
    const [openAccordion, setOpenAccordion] = useState(false)

    return(
        <>
            <div className='text-xl sm:text-3xl grid grid-rows-1'>
                <button className='grid justify-self-center hover:scale-110 transition delay-100 p-2 max-w-[96px] ' onClick={() => setOpenAccordion(!openAccordion)}><img src={tagIcon}></img></button>
                <div className={`text-white text-center grid transition-all duration-300 ease-in-out overflow-hidden ${openAccordion ? 'grid-rows[1fr] opacity-100' : 'grid-rows[0fr] opacity-0' }`} >
                    <div className='overflow-hidden max-w-sm p-4'>
                        <h2 className="text-orange_400 ">{title}</h2>
                        <p className="text-justify">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
