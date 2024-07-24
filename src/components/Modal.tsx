import { useState } from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react"
import { Button } from './Button'


export function Modal(){
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    
    return(
        <div>
            <button onClick={handleOpen}><a>HTML</a></button>
            <Dialog className='text-white border border-orange_400 max-w-sm grid justify-center text-center mx-auto' open={open} handler={handleOpen}>
                <DialogHeader className='justify-center'>
                    Aqui vai o Header
                </DialogHeader>
                <DialogBody>
                    <p>Aqui vai algum texto sobre</p>
                </DialogBody>
                <DialogFooter className='justify-center'>
                    <a onClick={handleOpen}><Button tittle='Sair'/></a>
                </DialogFooter>
            </Dialog>
        </div>
            
    )
}