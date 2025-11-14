import { Carousel } from "@material-tailwind/react";

interface CarouselProps {
    src1: string,
    src2: string,
    src3: string
}

export function CarouselDefault({src1, src2, src3}: CarouselProps){
    const slides = [src1, src2, src3];
    return (
        <Carousel className="rounded-xl">
            <img src={slides[0]} alt={"image 1 "} className="h-full w-full object-cover"/>
        </Carousel>
    );
}