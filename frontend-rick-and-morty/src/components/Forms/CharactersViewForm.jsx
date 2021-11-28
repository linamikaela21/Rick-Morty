import { Input } from './Input'
import { useSelector } from 'react-redux'

export const CharactersViewForm = (props) => {
    const locations = useSelector(state => state.locations)

    let location = locations.map(t => t.type)
    let unique = [...new Set(location)]
    return (
        <div style={{ border: '5px solid #a8c8c8' }} className='container'>
            <form className='form' onSubmit=''>
                <div className='rowContainer'>
                    <div style={{ border: '5px solid red' }} className='columnContainer'>
                        <Input
                            label='Episode Name'
                            type='text'
                            placeholder='Enter a name'
                            value={props.name}
                        // onChange={(e) => props.setName(e.target.value)}
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
                            label='Characters'
                            type='text'
                            placeholder='Enter characters'
                            value={props.name}
                        // onChange={(e) => props.setName(e.target.value)}
                        />


                        <div class='select-wrapper'>
                            <label for='select-choice'>Status</label>
                            <div class='styled-select' for='select-choice'>
                                <select name='select-choice' id='select-status'>
                                    <option value='Alive'>Alive</option>
                                    <option value='Dead'>Dead</option>
                                    <option value='Unknow'>Unknow</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div style={{ border: '5px solid blue' }} className='columnContainer'>
                        <Input
                            label='Name'
                            type='text'
                            placeholder='Enter a name'
                            value={props.name}
                        // onChange={(e) => props.setName(e.target.value)}
                        />
                        <div className='inputContainer'>
                            <div for='' className='rowContainer'><label for=''>Type</label></div>
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
                        <div className='rowContainer'><button className='button' style={{ backgroundColor: 'blue' }}>Add Location</button></div>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}><button className='button'>Add Character</button></div>
            </form>
        </div>
    )
}

