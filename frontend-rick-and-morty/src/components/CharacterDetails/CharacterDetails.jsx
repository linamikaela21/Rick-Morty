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
        let confirm = window.confirm(`Do you want to delete this character ?`)
        if(confirm) {
            dispatch(deleteCharacter(id, 'id'))
            dispatch(getCharacters)
            window.location.replace('/characters')
            alert('You deleted this character successfully')
        } else  window.location.replace(`/characters/${id}`)
    }

    return (
        <div>
            <ViewCharacterDetails 
            handleDeleteCharacter={handleDeleteCharacter}
            />
        </div>
    )
}
