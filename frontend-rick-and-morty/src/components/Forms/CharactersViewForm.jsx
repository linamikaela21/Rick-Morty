import { Input } from '../Common/Input'

export const CharactersViewForm = (props) => {
    return (
        <form>
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
                        label='Name'
                        type='radio'
                        placeholder='Enter a name'
                        value={props.name}
                    // onChange={(e) => props.setName(e.target.value)}
                    />
                    <Input
                        label='Name'
                        type='radio'
                        placeholder='Enter a name'
                        value={props.name}
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
                <label for='select-choice'>Age:</label>
                <div class='styled-select' for='select-choice'>
                    <select name='select-choice' id='select-choice'>
                        <option value='Choice 1'>Choice 1</option>
                        <option value='Choice 2'>Choice 2</option>
                        <option value='Choice 3'>Choice 3</option>
                    </select>
                </div>
            </div>
            <br />
            <div>
                <input type='submit' value='Submit' />
                <div class='clr'></div>
            </div>
            <button className='button'>Add Character</button>
        </form>
    )
}
