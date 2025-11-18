import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react"
import { Button } from "./Button"
import { projectProps } from "./Project"
import { CarouselDefault } from "./Carousel"

interface ModalCardProps extends projectProps {
    handleOpenModalCard: () => void,
    openModalCard: boolean,
    title: string
}

export function ModalCard({handleOpenModalCard, openModalCard, title, description, image, git_link, page_link, slides}: ModalCardProps){

    return(
        <>
            <Dialog className='bg-black items-center sm:w-full h-dvh sm:h-full p-4' open={openModalCard} handler={() => handleOpenModalCard}>
                <div className='text-white border w-full border-orange_400 border-dashed rounded-xl justify-center text-center mx-auto'>
                    <DialogHeader className='justify-center text-orange_400 p-4'>
                        {title}
                    </DialogHeader>
                    <DialogBody>
                        <div className="grid justify-center gap-4">
                            <div className="sm:w-full justify-center ">
                                {slides ? <CarouselDefault
                                    src1={slides[0]}
                                    src2={slides[1]}
                                    src3={slides[2]}
                                    src4={slides[3]}
                                /> : <img src={image} alt={title} className="w-full sm:max-w-3xl h-auto rounded-lg"/>
                                }
                            </div>
                            <div className="w-full">
                                {description}
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter className='sm:flex sm:justify-center gap-8 grid'>
                        {page_link && <a className="grid sm:w-44" href={page_link} target="_blank" rel="noopener"><Button tittle="Página" /></a>}
                        <a className="grid sm:w-44 outline-none" href={git_link} target="_blank" rel="noopener"><Button tittle="Repositório" /></a>
                        <a className="grid sm:w-44" onClick={handleOpenModalCard}><Button tittle='Sair'/></a>
                    </DialogFooter>
                </div>
            </Dialog>
        </>
    )
}