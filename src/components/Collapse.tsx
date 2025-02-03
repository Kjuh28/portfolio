import { useState, useRef } from "react"
import { useOnClickOutside } from 'usehooks-ts'
import { Modal } from "./Modal"
export interface AbilityProps {
    id: string,
    title: string,
    icon_link: string,
    description: string,
    icon_type: number
}

export function Collapse({id, title, icon_link, description, icon_type}:AbilityProps){
    const [openComponents, setOpenComponents] = useState(false)
    const openRef = useRef(null)

    const handleClickOutside = () => {
        setOpenComponents(false)
    }
    const handleOpenComponents = () =>{
            setOpenComponents(!openComponents)
    }

    useOnClickOutside(openRef, handleClickOutside)

    return(
        <>
            <div tabIndex={icon_type} className='text-xl sm:text-2xl p-6 sm:p-14 relative sm:min-w-80' >
                    <div ref={openRef}>
                        <button  className='justify-self-center hover:scale-110 transition delay-100 p-2 max-w-20 sm:max-w-[96px]' onClick={() => setOpenComponents(!openComponents)}><img src={icon_link}></img></button>
                        <div className={`text-white text-center transition-all duration-300 ease-in-out`} >
                            { window.innerWidth >= 768 && openComponents ?
                                    <div className={`sm:inline-block sm:left-0 p-4 absolute border border-dashed rounded-xl border-orange_400 bg-black z-10`}>
                                        <h2 className="text-orange_400">{title}</h2>
                                        <p className="text-left">{description}</p>           
                                    </div> 
                                    :
                                    <Modal
                                        key={id}
                                        id={id}
                                        title={title}
                                        description={ description}
                                        icon_link={icon_link}
                                        icon_type={icon_type}
                                        handleOpenComponents={handleOpenComponents}
                                        openComponents= {openComponents}
                                    />
                            }
                        </div>                    
                    </div>
            </div>
        </>
    )
}
