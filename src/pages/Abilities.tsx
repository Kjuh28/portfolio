import { Collapse, abilityProps} from "../components/Collapse";
import { useState, useEffect } from "react";


export function Abilities(){
    const [ability, setAbility] = useState<abilityProps[]>([])

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

    return(
        <section className="p-8 sm:mx-32 mx-auto max-w-8xl">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center m-10">Habilidades</h1>
            <ul className="mx-auto text-orange_400 flex flex-wrap justify-center pt-20 pb-20 sm:text-6xl text-5xl md:grid grid-rows-2 md:grid-flow-col md:grid sm:gap-16 gap-32 sm:justify-between ">
                {
                    ability.length > 0 && ability.map((abilityData) => 
                        <Collapse 
                            title={abilityData.title}
                            tagIcon={abilityData.tagIcon}
                            description ={abilityData.description}                            
                        />)
                }
                                
                {/* <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ><Collapse /></li>
                <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ></li>
                <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ></li>
                <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ></li>
                <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ></li>
                <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ></li>
                <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ></li>
                <li className="hover:text-orange_600 hover:scale-110 transition delay-100" ></li> */}
            </ul>
        </section>
    )
}