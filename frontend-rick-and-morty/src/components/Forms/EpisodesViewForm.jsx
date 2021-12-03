import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Input } from '../Common/Input/index'
import { getEpisodes, postEpisode } from '../../redux/actions/episodesActions'
import { getCharacterNameForm } from '../../redux/actions/characterActions'
import { Card } from '../Common/Card'
import { Link } from 'react-router-dom'

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
        style={{ width: '90%' }}
            className='form'
            onSubmit={(e) => handleSubmit(e)}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to='/home'>
                    <button className='button'>Go back</button>
                </Link>
            </div>
            <Input
                label='Episode Name'
                type='text'
                placeholder='Enter a name'
                value={name}
                onChange={(e) => handleName(e)}
            />
            <div className='inputContainer' style={{ width: '100%' }}>
                <fieldset style={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
                    <legend>Characters</legend>
                    <div style={{ width: '80%' }}>
                        <Input
                            type='text'
                            placeholder='Look for your characters'
                            value={charName}
                            onChange={(e) => handleCharName(e)}
                        />
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                            <button
                            className='button'
                            style={{ backgroundColor: 'blue' }}
                            onClick={(e) => handleGetCharacterName(e)}
                        >Search
                        </button>
                        </div>
                        <div>
                            {
                                charObj?.map(c => {
                                    return (
                                        <>
                                            <Card
                                             style={{ width: '100%' }}
                                                name={c.name}
                                                textOne={c.status}
                                                textTwo={c.gender}
                                                image={c.image}
                                                buttonText='X'
                                                onClick={(e) => handleDeleteChar(e, c.id)}
                                            />
                                        </>
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
