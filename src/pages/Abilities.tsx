import { Collapse, AbilityProps} from "../components/Collapse";
import { useState, useEffect} from "react";

export function Abilities(){
    const [ability, setAbility] = useState<AbilityProps[]>([])

        useEffect(() => {
            fetch('https://portfolio-db-git-main-kerleys-projects-d76691af.vercel.app/api/abilities', {
                method:'GET',
                mode:"cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS,DELETE",
                    "Access-Control-Max-Age": "86400",
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
            <ul className="grid auto-rows-auto">
                <h2 className="text-2xl sm:text-4xl font-bold text-center m-10">Front-end</h2>
                    <li className="text-center inline-flex justify-center flex-wrap ">
                        {
                            ability.length > 0 && ability.map((abilityData) => 
                            abilityData.icon_type == 2 &&
                            <Collapse
                                key={abilityData.id}
                                id={abilityData.id} 
                                title={abilityData.title}
                                icon_link={abilityData.icon_link}
                                description ={abilityData.description}
                                icon_type={abilityData.icon_type}                            
                            />)
                        }
                    </li>
            </ul>
            <ul className="grid auto-rows-auto">
                <h2 className="text-2xl sm:text-4xl font-bold text-center m-10">Back-end</h2>
                    <li className="text-center inline-flex justify-center flex-wrap ">
                        {
                            ability.length > 0 && ability.map((abilityData) => 
                            abilityData.icon_type == 1 &&
                            <Collapse
                                key={abilityData.id}
                                id={abilityData.id} 
                                title={abilityData.title}
                                icon_link={abilityData.icon_link}
                                description ={abilityData.description}
                                icon_type={abilityData.icon_type}                            
                            />)
                        }
                    </li>
            </ul>
        </section>
    )
}