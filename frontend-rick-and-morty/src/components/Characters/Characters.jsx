import { ViewCharacters } from "./ViewCharacters"
import { useSelector } from "react-redux"
import { SearchBar } from "../SearchBar/SearchBar"

export const Characters = () => {


    const characters = useSelector(state => state.characters)

    return (
        <div className=''>
            <div className='navContainer'>
                <SearchBar />
            </div>
            <div className='rowContainer'>
                <ViewCharacters characters={characters} />
            </div>
        </div>
    )
}

