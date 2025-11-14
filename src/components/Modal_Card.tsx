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

export function ModalCard({handleOpenModalCard, openModalCard, title, description, image, git_link, page_link}: ModalCardProps){

    return(
        <div>
            <Dialog className='bg-black items-center h-dvh p-4' open={openModalCard} handler={() => handleOpenModalCard}>
                <div className='text-white border w-full border-orange_400 border-dashed rounded-xl justify-center text-center mx-auto'>
                    <DialogHeader className='justify-center text-orange_400 p-4'>
                        {title}
                    </DialogHeader>
                    <DialogBody>
                        <div className="sm:flex sm:justify-between items-center gap-4">
                            <div className="max-w-xl">{description}</div>
                            <div className="max-w-2xl relative
                            
                            ">
                                {<CarouselDefault
                                    src1={image}
                                    src2={image}
                                    src3={image}
                                />
                                }
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
        </div>
    )
}