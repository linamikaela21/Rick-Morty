import { ViewCharacters } from "./ViewCharacters"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCharacters } from '../../redux/actions/characterActions'

export const Characters = () => {
    
    const dispatch = useDispatch()
    
    const characters = useSelector(state => state.characters)

    useEffect(() => {
        const fetchData = async () => {
            dispatch(getCharacters())
        }
        fetchData()
    }, [dispatch])

    return (
        <div>
            <ViewCharacters
                characters={characters}
            />
        </div>
    )
}
