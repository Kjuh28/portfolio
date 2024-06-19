import { Project } from "../components/Project";

export function Projects(){
    return(
        <section className="p-8 sm:mx-64 mx-auto">
            <h1 className=" text-3xl sm:text-7xl font-bold text-center m-10">Projetos</h1>
            <div className="w-full">
                <Project />
            </div>
        </section>
    )
}