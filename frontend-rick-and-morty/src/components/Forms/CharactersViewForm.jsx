import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharacters, postCharacter } from '../../redux/actions/characterActions'
import { getEpisodes } from '../../redux/actions/episodesActions'
import { getLocations } from '../../redux/actions/locationsActions'
import { Input } from '../Common/Input/index'

export const CharactersViewForm = (props) => {

    // {
    //     "name":"oooo", "image":"image", "gender":"Male", 
    //"status":"Alive", "species":"species", "episodeId":[8], "locationId":5
    // }

    const dispatch = useDispatch()

    const locations = useSelector(state => state.locations)
    const episodes = useSelector(state => state.episodes)

    const [newCharacter, setNewCharacter] = useState({
        name: '',
        image: '',
        gender: '',
        status: '',
        species: '',
        locationId: '',
        episodeId: []
    })

    useEffect(() => {
        dispatch(getEpisodes())
        dispatch(getLocations())
    }, [dispatch])

    const onInputChange = (e) => {
        if (e.target.name === 'episodeId') {
            const episodeArray = newCharacter[e.target.name]
            newCharacter({
                ...newCharacter,
                [e.target.name]: episodeArray.concat(e.target.value)
            })
        } else {
            setNewCharacter({
                ...newCharacter,
                [e.target.name]: e.target.value
            })
        }
        console.log(newCharacter)
        // setErrors(
        //     validations({
        //       ...recipe,
        //       [e.target.name]: e.target.value,
        //     })
        //   )
    }

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setNewCharacter({
                ...newCharacter,
                episodeId: [...newCharacter.episodeId, parseInt(e.target.value)],
            })
        } else {
            setNewCharacter({
                ...newCharacter,
                episodeId: newCharacter.episodeId.filter(epi => parseInt(epi) !== parseInt(e.target.value)),
            })
        }
    }

    const handleGender = (e) => {
        e.preventDefault()
        setNewCharacter({
            ...newCharacter,
            gender: e.target.value
        })
    }

    const handleStatus = (e) => {
        e.preventDefault()
        setNewCharacter({
            ...newCharacter,
            status: e.target.value
        })
    }

    const handleLocation = (e) => {
        e.preventDefault()
        setNewCharacter({
            ...newCharacter,
            locationId: parseInt(e.target.value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postCharacter(newCharacter))
        alert('Your own character has been created!')
        dispatch(getCharacters())
        window.location.replace('/characters')
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={e => handleSubmit(e)} >
                <div>
                    <div className='inputContainer' style={{ border: '5px solid #3B4DA9', width: '100%', borderRadius: '2rem'}}>
                        <div className='rowContainer' style={{ width: '100%' }}>
                            <div style={{ border: '1rem solid #1c2c2', width: '100%' }}>
                                <Input
                                    label='Name'
                                    type='text'
                                    placeholder='Enter a Character name'
                                    name='name'
                                    value={newCharacter.name}
                                    onChange={e => onInputChange(e)}
                                />
                                <Input
                                    label='Image'
                                    type='text'
                                    placeholder='Enter a Character image'
                                    name='image'
                                    value={newCharacter.image}
                                    onChange={e => onInputChange(e)}
                                />
                                <div className='columnContainer' style={{ width: '100%', borderColor:'transparent' }}>
                                    <span>Gender</span>
                                    <select value={newCharacter.gender} onChange={e => handleGender(e)}>
                                        <option value='Male'>MALE</option>
                                        <option value='Female'>FEMALE</option>
                                    </select>
                                </div>
                            </div>
                            <div className='rowContainer' style={{ width: '100%' }}>
                            <div style={{ border: '1rem solid #1c2c2', width: '100%' }}>
                                    <Input
                                        label='Specie'
                                        type='text'
                                        name='species'
                                        placeholder='Enter characters'
                                        value={newCharacter.species}
                                        onChange={e => onInputChange(e)}
                                    />
                                     <div className='columnContainer' style={{width: '100%', borderColor:'transparent' }}>
                                        <span>Status</span>
                                        <select value={newCharacter.status} onChange={e => handleStatus(e)}>
                                            <option value='Alive'>ALIVE</option>
                                            <option value='Dead'>DEAD</option>
                                            <option value='unknow'>UNKNOW</option>
                                        </select>
                                    </div>
                                    <div className='columnContainer' style={{ width: '100%', borderColor:'transparent' }}>
                                    <div className=''><label htmlFor=''>Location</label></div>
                                    <select value={newCharacter.locationId} onChange={e => handleLocation(e)}>
                                        {
                                            locations.map(ty => {
                                                return (
                                                    <option key={ty.id} value={ty.id}>{ty.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='rowContainer'>
                            <fieldset className='columnContainer' style={{ width: '100%', backgroundColor:'#cacaca' }}>
                                <legend style={{ color: '#3B4DA9' }}>Episodes</legend>
                                <div className='container'>
                                    {
                                        episodes?.map(epi => {
                                            return (
                                                <div style={{ width: '28em', display: 'flex', justifyContent: 'flex-start' }}>
                                                    <label>{epi.name}</label>
                                                    <input
                                                        type='checkbox'
                                                        placeholder='Enter a character'
                                                        value={epi.id}
                                                        name='episodeId'
                                                        onChange={e => handleCheckbox(e)}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}><button className='button' style={{ backgroundColor: '#3B4DA9' }}>Add Character</button></div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link to='/home'>
                        <button className='button'>Go back</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
