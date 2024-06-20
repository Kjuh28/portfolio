export function Project({id, name, description}){
    return(
        <div id={id}>
            <h1><span>Nome do projeto:</span>{name}</h1>
            <p>{description}</p>
        </div>
    )
}