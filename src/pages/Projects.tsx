import { Project, projectProps } from "../components/Project";
import { useState, useEffect } from "react";

export function Projects(){

    const[project, setProject] = useState<projectProps[]>([])

    try {
        useEffect(() =>{
            fetch(`https://portfolio-db-q8dv.onrender.com/api/projects`, {
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
    
    } catch (error) {
        console.error(error)
    }
    
    return(
        <section className="p-8 sm:mx-32 mx-auto">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center m-10">Projetos</h1>
            <div className="w-full">
                { project.length > 0 && project.map((projectData) =>
                    <Project 
                        key={projectData.id}
                        id={projectData.id}
                        title={projectData.title}
                        description={projectData.description}
                        image={projectData.image}
                        git_link={projectData.git_link}
                        page_link={projectData.page_link}
                        index={projectData.index}
                    />
                )  
                }
                
            </div>
        </section>
    )
}