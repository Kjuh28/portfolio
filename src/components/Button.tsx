export function Button({txt}){

    const buttonColors = {
        primary:'border rounded font-bold',
        danger:'orange_800',
        neutral:'blue_g_500'
    }    

    return(
        <button className={buttonColors.danger}>
            {txt}
        </button>
    )
}