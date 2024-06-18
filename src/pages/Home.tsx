import { Navbar } from "../layout/Navbar";
import { Abilities } from "./Abilities";
import { Profile } from "./Profile";

export function Home(){
    return(
        <div className="text-white bg-black h-full w-full">
            <Navbar />
            <Profile />
            <Abilities />
        </div>
    )
}