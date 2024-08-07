import { Project, projectProps } from "../components/Project";
import { useState, useEffect } from "react";






export function Projects(){

    const[project, setProject] = useState<projectProps[]>([])

    useEffect(() =>{
        fetch(`https://portfolio-db-nine.vercel.app/api/projects`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            console.log(data)
        }).catch((err) => console.log(err))
    }, [])

    return(
        <section className="p-8 sm:mx-32 mx-auto">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center m-10">Projetos</h1>
            <div className="w-full">
                { project.length > 0 && project.map((projectData) =>
                    <Project 
                        key={projectData.id}
                        id={projectData.id}
                        name={projectData.name}
                        description={projectData.description}
                        img={projectData.img}
                        git={projectData.git}
                        index={projectData.index}
                    />
                )  
                }
                
            </div>
        </section>
    )
}