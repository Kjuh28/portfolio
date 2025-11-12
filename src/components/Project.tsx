import { useState } from 'react'

import { Button } from "./Button";
import { ModalCard } from "./Modal_Card";

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
    const[ openModalCard, setOpenModalCard ] = useState(false)
    
    const handleOpenModalCard = () => {
        setOpenModalCard(!openModalCard)
    }
    return(
        <div id={id} className='p-8 mb-8 border border-dashed border-orange_200 rounded-xl text-center place-items-center'>
            <div className={(Number(index) % 2 == 0 ? 'sm:flex sm:justify-between xl:max-h-96 gap-8' : 'sm:flex sm:flex-row-reverse xl:justify-between  gap-8')}>
                <div className="sm:max-w-xl w-full">
                    <a href={page_link} target="_blank" rel="noopener"><img className="w-full h-full object-cover object-center rounded-xl hover:scale-110 transition-transform" src={image}/></a>
                </div>
                <div className="sm:w-full max-w-xl">
                    <h1 className="font-bold text-3xl sm:text-4xl w-full text-orange_400 pb-8 pt-8">{title}</h1>
                    <p className="text-xl sm:text-2xl line-clamp-3 sm:line-clamp-none">{description}</p>
                    <footer className="pt-8 sm:flex sm:justify-around">
                        <a className="grid p-4 sm:w-44" href={git_link} target="_blank" rel="noopener">{<Button tittle="Repositório" />}</a>
                        <a className="grid p-4 sm:w-44"  rel="noopener" onClick={handleOpenModalCard}>
                            <Button tittle='Ver mais'/>
                            {
                            <ModalCard
                                id={id}
                                key={id}
                                index={index}
                                handleOpenModalCard={handleOpenModalCard}
                                openModalCard={openModalCard}
                                title={title}
                                description={description}
                                image={image}
                                git_link={git_link}
                                page_link={page_link}
                            />}
                        </a>
                    </footer>
                </div>
            </div>
            
        </div>
    )
}