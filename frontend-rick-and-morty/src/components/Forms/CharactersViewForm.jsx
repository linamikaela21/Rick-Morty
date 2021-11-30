import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters, postCharacter } from '../../redux/actions/characterActions'
import { getEpisodes } from '../../redux/actions/episodesActions'
import { getLocations } from '../../redux/actions/locationsActions'
import { Input } from '../Common/Input/index'

export const CharactersViewForm = (props) => {

    // {
    //     "name":"oooo", "image":"image", "gender":"Male", "status":"Alive", "species":"species", "epiId":[8], "locatId":5
    // }

    const dispatch = useDispatch()

    const locations = useSelector(state => state.locations)
    const episodes = useSelector(state => state.episodes)

    let location = locations.map(t => t.type)
    let unique = [...new Set(location)]

    const [newCharacter, setNewCharacter] = useState({
        name: '',
        image: '',
        gender: '',
        status: '',
        species: '',
        locatId: '',
        epiId: []
    })

    useEffect(() => {
        dispatch(getEpisodes())
        dispatch(getLocations())
      }, [dispatch])

      const onInputChange = (e) => {
        setNewCharacter({
            ...newCharacter,
            [e.target.name]: e.target.value
        })
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
            episodes: [...newCharacter.episodes, e.target.value],
          });
        } else {
            setNewCharacter({
            ...newCharacter,
            episodes: newCharacter.episodes.filter(epi => epi !== e.target.value),
          })
        }
      }

      const handleSubmit = (e) => {
          e.preventDefault()
          dispatch(postCharacter(newCharacter))
          alert('Your own character has been created!')
        //   setNewCharacter({
        //     name: '',
        //     gender: '',
        //     location: '',
        //     status: '',
        //     episodes: [],
        //     image: ''
        // })
        dispatch(getCharacters())
        window.location.replace('/characters')
        }

    return (
        <div style={{ border: '5px solid #a8c8c8' }} className='container'>
            <form className='form' onSubmit={e => handleSubmit(e)}>
                <div className='rowContainer'>
                    <div style={{ border: '5px solid red' }} className='columnContainer'>
                        <Input
                            label='Episode Name'
                            type='text'
                            placeholder='Enter a name'
                            value={newCharacter.epiId}
                        onChange={(e) => props.setName(e.target.value)}
                        />
                        <div className='rowContainer'><button className='button' style={{ backgroundColor: 'blue' }}>Add Episode</button></div>
                    </div>
                    <div style={{ border: '5px solid #1c2c2' }} className='columnContainer'>
                        <Input
                            label='Name'
                            type='text'
                            placeholder='Enter a name'
                            value={props.name}
                        // onChange={(e) => props.setName(e.target.value)}
                        />
                        <fieldset>
                            <legend>Gender</legend>
                            <div className='rowContainer'>
                                <Input
                                    label='Male'
                                    type='radio'
                                    value={props.gender}
                                // onChange={(e) => props.setName(e.target.value)}
                                />
                                <Input
                                    label='Female'
                                    type='radio'
                                    value={props.gender}
                                // onChange={(e) => props.setName(e.target.value)}
                                />
                            </div>
                        </fieldset>

                        <Input
                            label='Episodes'
                            type='text'
                            placeholder='Enter characters'
                            value={props.name}
                        // onChange={(e) => props.setName(e.target.value)}
                        />

                        <div>
                            <h4>Status</h4>
                            <select onChange={props.onChange}>
                                <option value='All'>ALL</option>
                                <option value='Alive'>ALIVE</option>
                                <option value='Dead'>DEAD</option>
                                <option value='unknow'>UNKNOW</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ border: '5px solid blue' }} className='columnContainer'>
                        <Input
                            label='Location'
                            type='text'
                            placeholder='Enter a Location'
                            value={props.name}
                        // onChange={(e) => props.setName(e.target.value)}
                        />

                        <div className='rowContainer'><button className='button' style={{ backgroundColor: 'blue' }}>Add Location</button></div>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}><button className='button'>Add Character</button></div>
            </form>
        </div>
    )
}

