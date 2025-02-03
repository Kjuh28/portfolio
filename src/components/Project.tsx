import { Button } from "./Button";

export interface projectProps{
    id: string, 
    title: string,
    description: string,
    image: string,
    git_link: string,
    page_link: string,
    index: string
}

export function Project({id, title, description, image, git_link, page_link, index}:projectProps){
    return(
        <div id={id} className='p-8 mb-8 border border-dashed border-orange_200 rounded-xl text-center place-items-center'>
            <div className={(Number(index) % 2 == 0 ? 'sm:flex sm:justify-between xl:max-h-96 gap-8' : 'sm:flex sm:flex-row-reverse xl:justify-between  gap-8')}>
                <div className="sm:max-w-xl w-full">
                    <a href={page_link} target="_blank" rel="noopener"><img className="w-full h-full object-cover object-center rounded-xl hover:scale-110 transition-transform" src={image}/></a>
                </div>
                <div className="sm:w-full max-w-xl">
                    <h1 className="font-bold text-3xl sm:text-4xl w-full text-orange_400 pb-8 pt-8">{title}</h1>
                    <p className="text-xl sm:text-2xl line-clamp-3 sm:line-clamp-none">{description}</p>
                    <footer className="pt-8">
                        <a href={git_link} target="_blank" rel="noopener">{<Button tittle="Repositório" />}</a>
                    </footer>
                </div>
            </div>
            
        </div>
    )
}