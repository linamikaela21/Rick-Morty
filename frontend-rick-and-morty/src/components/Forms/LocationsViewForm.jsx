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
        charId: []
    })

    console.log(newLocation, 'newLocation')

    const [charId, setCharId] = useState([])

    useEffect(() => {
        dispatch(getCharacters())
      }, [dispatch])

      const onInputChange = (e) => {
        setNewLocation({
            ...newLocation,
            [e.target.name]: e.target.value
        })

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
            charId: [...newLocation.charId, e.target.value],
          });
        } else {
            setNewLocation({
            ...newLocation,
            charId: newLocation.charId.filter(id => id !== e.target.value),
          })
        }
        console.log(newLocation)
      }

      const handleSubmit = (e) => {
          e.preventDefault()
          dispatch(postLocation(newLocation))
          alert('Your own location has been created!')
        dispatch(getLocations())
        window.location.replace('/locations')
        }

    return (
        <form className='form'  onSubmit={e => handleSubmit(e)}>
            <Input
                label='Name'
                type='text'
                placeholder='Enter a name'
                value={newLocation.name}
                onChange={e => onInputChange(e)}
            />
            <div className='inputContainer'>
                <div className='rowContainer'><label htmlFor=''>Type</label></div>
                <div className='rowContainer'>
                    <select name='type' id='type'>
                        {
                            unique.map(ty => {
                                return (
                                    <option key={ty} value={ty}>{ty}</option>
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
                value={newLocation.dimension}
                onChange={e => onInputChange(e)}
            />
            <div className='inputContainer'>
                <fieldset >
                    <legend>Characters</legend>
                    <div className=''>
                        {
                            characters?.map(ch => {
                                return (
                                    <div style={{ width: '350px', display: 'flex', justifyContent: 'center' }}>
                                        <label>{ch.name}</label>
                                        <input
                                            id={ch.id}
                                            type='checkbox'
                                            placeholder='Enter a character'
                                            value={ch.id}
                                            name={ch.name}
                                        onChange={e => handleCheckbox(e)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='rowContainer'><button className='button' style={{ backgroundColor: 'blue' }}>Add Character</button></div>
                </fieldset>
            </div>
            <div className='rowContainer'><input className='button' type='submit' /></div>
        </form>
    )
}
