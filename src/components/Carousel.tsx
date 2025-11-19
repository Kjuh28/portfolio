import {useState} from 'react';
interface CarouselProps {
    src1: string,
    src2: string,
    src3: string,
    src4: string,
}

export function CarouselDefault({src1, src2, src3, src4}: CarouselProps){
    const [currentSlide, setCurrentSlide] = useState(src1);
    
    const slideOnClick = (slide: string) => {
        setCurrentSlide(slide);
    }

    const slides = [src1, src2, src3, src4];

    const slideMap = () => {
        return (
            slides.map((slide, index) => (
            <div key={index} className="max-w-24 w-12 h-16 m-2 active:border border-orange_400 border-dashed rounded-lg overflow-hidden">
                <img src={slide} alt={`Slide ${index + 1}`} onClick={() => slideOnClick(slide)} className="w-full h-full object-cover"/>
            </div>
        ))) 
    }
    return (
        <div className="grid justify-center">
            <div className="sm:max-w-3xl">
                <img src={currentSlide} alt="Carousel Slide" className="w-full sm:max-w-3xl rounded-lg border border-orange_400 border-dashed"/>
            </div>
            <div className="flex justify-center">
                {slideMap()}
            </div>
        </div>
    )
}