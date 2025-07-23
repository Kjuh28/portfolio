import { Project, projectProps } from "../components/Project";
import { useState, useEffect } from "react";

export function Projects(){

    const[project, setProject] = useState<projectProps[]>([])
        try {
            useEffect(() =>{
                fetch('https://portfolio-db-git-main-kerleys-projects-d76691af.vercel.app/api/projects', {
                    method:'GET',
                    mode:"cors",
                    headers:{
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS,DELETE",
                        "Access-Control-Max-Age": "86400",
                    },
                }).then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                    console.log(data)
                }).catch((err) => console.log(err))
            }, [])
        } catch (error) {
            console.log('---------------------------')
            console.log(error)
        }
        

    return(
        <section className="p-8 sm:mx-32 mx-auto">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center m-10">Projetos</h1>
            <div className="w-full">
                { project.length > 0 &&  [...project].reverse().map((projectData) =>
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