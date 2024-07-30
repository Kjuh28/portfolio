import { Collapse, abilityProps} from "../components/Collapse";
import { useState, useEffect, useRef} from "react";

export interface countProps{
    openCount: number,
    countRef: number
}

export function Abilities(){
    const [ability, setAbility] = useState<abilityProps[]>([])
    const [openCount, setOpenCount] = useState(0)
    const countRef = useRef()

    useEffect(() => {
        fetch('https://portfolio-db-nine.vercel.app/api/abilities', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setAbility(data)
        })
        .catch((err) => console.log(err))
    }, [])
    
    useEffect(() =>{
        countRef.current = openCount;
    }, [openCount])

    return(
        <section className="p-8 sm:mx-32 mx-auto max-w-8xl">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center m-10">Habilidades</h1>
            <ul className="grid auto-rows-auto">
                    <li className="text-center inline-flex justify-center sm:gap-12 flex-wrap ">
                        {
                            ability.length > 0 && ability.map((abilityData) => 
                            <Collapse 
                                title={abilityData.title}
                                tagIcon={abilityData.tagIcon}
                                description ={abilityData.description}                            
                            />)
                        }
                    </li>
            </ul>
        </section>
    )
}