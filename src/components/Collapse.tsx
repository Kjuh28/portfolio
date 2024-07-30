import { useState, useRef } from "react"
import { useOnClickOutside } from 'usehooks-ts'
export interface abilityProps {
    title: string,
    tagIcon: string,
    description: string
}

export function Collapse({title, tagIcon, description}:abilityProps){
    const [openAccordion, setOpenAccordion] = useState(false)
    const openRef = useRef(null)

    const handleClickOutside = () => {
        setOpenAccordion(false)
    }
    
    useOnClickOutside(openRef, handleClickOutside)

    return(
        <>
            <div className='text-xl sm:text-2xl p-14 relative' >
                    <div ref={openRef}>
                        <button  className='justify-self-center hover:scale-110 transition delay-100 p-2 max-w-24 sm:max-w-[96px]' onClick={() => setOpenAccordion(!openAccordion)}><img src={tagIcon}></img></button>
                        <div className={`text-white text-center transition-all duration-300 ease-in-out`} >
                            {openAccordion && <div className={`p-4 absolute border border-dashed rounded-xl border-orange_400 left-0 bg-black z-10`}>
                                <h2 className="text-orange_400 ">{title}</h2>
                                <p className="text-justify">{description}</p>           
                        </div> }
                    </div>                    
                </div>
            </div>
        </>
    )
}
