import { Input } from '../Common/Input/index'
import { useSelector } from 'react-redux'

export const LocationsViewForm = (props) => {

    const characters = useSelector(state => state.characters)
    const locations = useSelector(state => state.locations)

    let location = locations.map(t => t.type)
    let unique = [...new Set(location)]

    return (
        <form className='form'>
            <Input
                label='Name'
                type='text'
                placeholder='Enter a name'
                value={props.name}
            // onChange={(e) => props.setName(e.target.value)}
            />
            <div className='inputContainer'>
                <div for='' className='rowContainer'><label htmlFor=''>Type</label></div>
                <div for='' className='rowContainer'>
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
                placeholder='Enter characters'
                value={props.name}
            // onChange={(e) => props.setName(e.target.value)}
            />
            <div className='inputContainer'>
                <fieldset >
                    <legend>Characters</legend>
                    <div className=''>
                        {
                            characters?.map(ch => {
                                return (
                                    <div style={{ width: '350px', display: 'flex', justifyContent: 'center' }}>
                                        <label htmlFor="">{ch.name}</label>
                                        <input
                                            id={ch.id}
                                            type='checkbox'
                                            placeholder='Enter a character'
                                            name={ch.name}
                                        // onChange={(e) => props.setName(e.target.value)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='rowContainer'><button className='button' style={{ backgroundColor: 'blue' }}>Add Character</button></div>
                </fieldset>
            </div>
            <div className='rowContainer'><button className='button'>Create Location</button></div>
        </form>
    )
}
