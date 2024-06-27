export function Button({txt}){
    return(
        <button className="bg-none text-orange_400 border rounded-xl pr-4 pl-4 p-2 font-bold hover:bg-orange_600 hover:text-black">
            {txt}
        </button>
    )
}