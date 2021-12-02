import { ViewCharacterDetails } from './ViewCharacterDetails'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCharacter, getCharacterId, getCharacters } from '../../redux/actions/characterActions'
import { useParams } from 'react-router'

export const CharacterDetails = () => {

    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCharacterId(id))
    }, [dispatch, id])

    //DELETE
    const handleDeleteCharacter = (e, id) => {
        e.preventDefault()
        console.log(id)
        alert(`Do you want to delete ${id} episode ?`)
        dispatch(deleteCharacter(id, 'id'))
        dispatch(getCharacters)
        window.location.replace('/characters')
    }

    return (
        <div>
            <ViewCharacterDetails 
            handleDeleteCharacter={handleDeleteCharacter}
            />
        </div>
    )
}
