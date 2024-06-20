export function Project({id, name, description}){
    {(id % 2 == 0 ? console.log(`${id} é par`) : console.log(`${id} é impar`) )}
    return(
        <div id={id} className="text-3xl text-center p-8 m-8 border border-dashed rounded-xl ">
            <h1 className="text-orange_400 font-bold text-6xl">{name}</h1>
            <p>{description}</p>
        </div>
        
    )
}