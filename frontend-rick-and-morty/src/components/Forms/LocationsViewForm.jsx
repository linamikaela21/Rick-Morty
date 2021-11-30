import { Input } from '../Common/Input/index'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../redux/actions/characterActions'
import { getLocations, postLocation } from '../../redux/actions/locationsActions'

export const LocationsViewForm = (props) => {

    const dispatch = useDispatch()

    const characters = useSelector(state => state.characters)
    const locations = useSelector(state => state.locations)

    let location = locations.map(t => t.type)
    let unique = [...new Set(location)]

    const [newLocation, setNewLocation] = useState({
        name: '',
        type: '',
        dimension: '',
        characterId: []
    })

    console.log(unique, 'typesOptions')
    console.log(newLocation, 'newLocation')

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch])

    const onInputChange = (e) => {
        if (e.target.name === 'characterId') {
            const charIdArray = newLocation[e.target.name]
            setNewLocation({
                ...newLocation,
                [e.target.name]: charIdArray.concat(e.target.value)
            })
        } else {
            setNewLocation({
                ...newLocation,
                [e.target.name]: e.target.value
            })
        }
        console.log(newLocation)
        // setErrors(
        //     validations({
        //       ...recipe,
        //       [e.target.name]: e.target.value,
        //     })
        //   )
    }

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setNewLocation({
                ...newLocation,
                characterId: [...newLocation.characterId, e.target.value],
            });
        } else {
            setNewLocation({
                ...newLocation,
                characterId: newLocation.characterId.filter(id => id !== e.target.value),
            })
        }
        console.log(newLocation)
    }

    const handleType = (e) => {
        e.preventDefault()
        setNewLocation({
            ...newLocation,
            type: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postLocation(newLocation))
        alert('Your own location has been created!')
        dispatch(getLocations())
        window.location.replace('/locations')
    }

    return (
        <form className='form' onSubmit={e => handleSubmit(e)}>
            <Input
                label='Name'
                type='text'
                placeholder='Enter a name'
                name='name'
                value={newLocation.name}
                onChange={e => onInputChange(e)}
            />
            <div className='inputContainer'>
                <div className='rowContainer'><label htmlFor=''>Type</label></div>
                <div className='rowContainer'>
                    <select value={newLocation.type} onChange={handleType}>
                        {
                            unique.map(ty => {
                                return (
                                    <option key={ty.value} value={ty.value}>{ty}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <Input
                label='Dimension'
                type='text'
                placeholder='Enter Dimension'
                name='dimension'
                value={newLocation.dimension}
                onChange={e => onInputChange(e)}
            />
            <div className='inputContainer'>
                <fieldset className='columnContainer' style={{ width: '100%' }}>
                    <legend>Characters</legend>
                    <div className=''>
                        {
                            characters?.map(ch => {
                                return (
                                    <div style={{ width: '350px', display: 'flex', justifyContent: 'center' }}>
                                        <label>{ch.name}</label>
                                        <input
                                            type='checkbox'
                                            placeholder='Enter a character'
                                            value={ch.id}
                                            name='characterId'
                                            onChange={e => handleCheckbox(e)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </fieldset>
            </div>
            <div className='rowContainer'><input className='button' type='submit' /></div>
        </form>
    )
}
