import { ViewCharacters } from "./ViewCharacters"
import { useSelector } from "react-redux"

export const Characters = () => {
    const characters = useSelector(state => state.characters)
    return (
        <div>
            <ViewCharacters
            characters={characters}
            />
        </div>
    )
}
