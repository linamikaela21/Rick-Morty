import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Input } from '../Common/Input/index'
import { getEpisodes, postEpisode } from '../../redux/actions/episodesActions'
import { getCharacterNameForm } from '../../redux/actions/characterActions'

export const EpisodesViewForm = () => {

    const dispatch = useDispatch()

    const newEpisode = useSelector(state => state.newEpisode)

    const [name, setName] = useState('')
    const [characterId, setCharacterId] = useState([])
    const [charName, setCharName] = useState('')
    const [charObj, setCharObj] = useState([])

    useEffect(() => {
        setCharacterId([...new Set(charObj.map(c => c.id))])
        setCharObj([...charObj, ...newEpisode])
    }, [dispatch, newEpisode])
    
    useEffect(() => {
        setCharacterId([...new Set(charObj.map(c => c.id))])
    }, [dispatch, charObj])
    
    console.log(name, characterId);
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postEpisode(name, characterId))
        alert('Your episode has been created')
        dispatch(getEpisodes())
        window.location.replace('/episodes')
    }

    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleCharName = (e) => {
        e.preventDefault()
        setCharName(e.target.value)
    }

    const handleGetCharacterName = async (e) => {
        e.preventDefault()
        dispatch(getCharacterNameForm(charName))
        setCharName('')
    }

    const handleDeleteChar = async (e, id) => {
        e.preventDefault()
        setCharObj(charObj.filter(c => c.id !== id))
        setCharacterId([...[...new Set(charObj.map(c => c.id))]])
    }

    return (
        <form
            className='form'
            onSubmit={(e) => handleSubmit(e)}>
            <Input
                label='Episode Name'
                type='text'
                placeholder='Enter a name'
                value={name}
                onChange={(e) => handleName(e)}
            />
            <div className='inputContainer'>
                <fieldset style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
                    <legend>Characters</legend>
                    <div style={{ width: '100%' }}>
                        <Input
                            type='text'
                            placeholder='Look for your characters'
                            value={charName}
                            onChange={(e) => handleCharName(e)}
                        />
                    </div>
                    <div className=''>
                        <button
                            className='button'
                            style={{ backgroundColor: 'blue' }}
                            onClick={(e) => handleGetCharacterName(e)}
                        >Search
                        </button>
                        <div className='columnContent'>
                            {
                                charObj?.map(c => {
                                    return (
                                        <div key={c.id} className='divCard'>
                                            <div className='divCard'>
                                                <div className='container'>
                                                    <h4 className='cardText'>{c.name}</h4>
                                                    <h4 className='cardText'>{c.status}</h4>
                                                    <h4 className='cardText'>{c.gender}</h4>
                                                </div>
                                                <div><iframe className='redo' src={c.image} title={c.name} width='300px' height='300px'></iframe></div>
                                                <button className='btnClose'
                                                    onClick={(e) => handleDeleteChar(e, c.id)}
                                                    style={{ backgroundColor: 'red', width: '2em', height: '2em' }}>
                                                        X
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </fieldset>
            </div>
            <div className='rowContainer'> <input type="submit" className='button' /></div>
        </form>
    )
}
