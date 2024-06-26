import { Project } from "../components/Project";
import { useState, useEffect } from "react";

export function Projects(){

    const[project, setProject] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/projects', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        }).catch((err) => console.log(err))
    })

    return(
        <section className="p-8 sm:mx-64 mx-auto">
            <h1 className=" text-3xl sm:text-7xl font-bold text-center m-10">Projetos</h1>
            <div className="w-full">
                { project.length > 0 && project.map((projectData) =>
                    <Project 
                        key={projectData.id}
                        id={projectData.id}
                        name={projectData.name}
                        description={projectData.description}
                        img={projectData.img}
                    />
                )  
                }
                
            </div>
        </section>
    )
}