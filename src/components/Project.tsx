export function Project({id, name, description}){
    return(
        <div id={id} className='text-3xl grid justify-items-scretch text-center p-8 m-8 border border-dashed rounded-xl'>
            <div className={(id % 2 == 0 ? 'justify-self-start' : 'justify-self-end')}>
                <h1 className="font-bold text-6xl">{name}</h1>
                <p>{description}</p>
            </div>
            
        </div>
    )
}