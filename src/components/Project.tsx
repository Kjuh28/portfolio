export function Project({id, name, description, img}){
    return(
        <div id={id} className='p-8 mb-8 border border-dashed rounded-xl text-center place-items-center'>
            <div className={(id % 2 == 0 ? 'sm:flex sm:justify-between max-h-96' : 'sm:flex sm:flex-row-reverse sm:justify-between max-h-96')}>
                <div className="sm:max-w-xl w-full">
                    <img className="w-full h-full object-cover object-center rounded-xl" src={img} />
                </div>
                <div className="sm:w-full max-w-xl">
                    <h1 className="font-bold text-3xl sm:text-6xl w-full text-orange_400 pb-8">{name}</h1>
                    <p className="text-2xl sm:text-4xl line-clamp-3 sm:line-clamp-none">{description}</p>
                </div>
            </div>
            
        </div>
    )
}