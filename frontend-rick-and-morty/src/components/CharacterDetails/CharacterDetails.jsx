import { ViewCharacterDetails } from './ViewCharacterDetails'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterId } from '../../redux/actions/characterActions'
import { useParams } from 'react-router'

export const CharacterDetails = () => {
   
    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCharacterId(id))
    }, [dispatch, id])

    return (
        <div>
            <ViewCharacterDetails />
        </div>
    )
}
