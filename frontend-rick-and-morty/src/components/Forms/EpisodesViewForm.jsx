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

    console.log(name, 'name')
    console.log(characterId, 'characterId')
    console.log(charName, 'charName')
    console.log(charObj, 'charObj')


    useEffect(() => {
        setCharObj([...charObj, ...newEpisode])
        setCharacterId([...new Set(charObj.map(c => c.id))])
    }, [dispatch, newEpisode])

    useEffect(() => {
        setCharacterId([...new Set(charObj.map(c => c.id))])
    }, [dispatch, charObj])


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postEpisode(name, characterId))
        alert('Your episode has been created')
        dispatch(getEpisodes())
        // setCharObj([])
        // setCharacterId([])
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
    }

    const handleDeleteChar = async (e, id) => {
        e.preventDefault()
        setCharObj(charObj.filter(c => c.id !== id))
        setCharacterId([...new Set(charObj.map(c => c.id))])
    }

    return (
        <form
            className='form'
            onSubmit={(e) => handleSubmit(e)}>
            <Input
                label='Episode Name'
                type='text'
                value={name}
                placeholder='Enter a name'
                onChange={(e) => handleName(e)}
            />
            <div className='inputContainer'>
                <fieldset style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
                    <legend>Characters</legend>
                    <div style={{ width: '100%' }}>
                        <Input
                            type='text'
                            placeholder='Look for your characters'
                            value={characterId}
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
                                                <button className='button'
                                                    onClick={(e) => handleDeleteChar(e, c.id)}
                                                    style={{ backgroundColor: 'red', width:'50px', height:'50px' }}>
                                                    x
                                                </button>
                                                <div className='divCard'><h4 className='cardText'>{c.name}</h4></div>
                                                <div className='divCard'><h4 className='cardText'>{c.status}</h4></div>
                                                <div className='divCard'><h4 className='cardText'>{c.gender}</h4></div>
                                                <div className=''><iframe src={c.image} title={c.name} width='300px' height='300px'></iframe></div>
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
