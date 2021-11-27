import { Input } from './Input'

export const LocationsViewForm = () => {

    "name": "jjjjjjjjjjj",
        "type": "Planet",
            "dimension": "dimension",
                "charId": [1, 2]


    return (
        <form className='form'>
            <Input
                label='Name'
                type='text'
                placeholder='Enter a name'
                value={props.name}
            // onChange={(e) => props.setName(e.target.value)}
            />
            <div className='select-wrapper'>
                <label for='select-choice'>Type</label>
                <div className='styled-select' for='select-choice'>
                    <select name='type' id='type'>
                        <option value='Choice 1'>Choice 1</option>
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
            <fieldset>
                <legend>Characters</legend>
                <div className='rowContainer'>
                    <Input
                        label='Name'
                        type='radio'
                        placeholder='Enter a name'
                        value={props.name}
                    // onChange={(e) => props.setName(e.target.value)}
                    />
                </div>
            </fieldset>
            <div className='rowContainer'><button className='button'>Add Character</button></div>
        </form>
    )
}
