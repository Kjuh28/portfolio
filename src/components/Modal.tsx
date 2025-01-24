import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react"
import { Button } from './Button'
import { AbilityProps } from './Collapse'

interface ModalProps extends AbilityProps{
    handleOpenComponents: () => void,
    openComponents: boolean
}

export function Modal({title, description, handleOpenComponents, openComponents}:ModalProps){

    return(
        <div>
            <Dialog className='bg-black h-dvh sm:h-auto flex items-center p-4 ' open={openComponents} handler={() => handleOpenComponents}>
                <div className='text-white border border-orange_400 border-dashed rounded-xl w-xl max-w-xl justify-center text-center mx-auto'>
                    <DialogHeader className='justify-center'>
                        {title}
                    </DialogHeader>
                    <DialogBody>
                        <p>{description}</p>
                    </DialogBody>
                    <DialogFooter className='justify-center'>
                        <a onClick={handleOpenComponents}><Button tittle='Sair'/></a>
                    </DialogFooter>
                </div>
            </Dialog>
        </div>
            
    )
}