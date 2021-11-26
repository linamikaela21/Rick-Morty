import { Input } from "../Input"

export const ViewForm = (props) => {
    return (
        <form action="#">

            <Input
                label='Name'
                type='text'
                placeholder='Enter a name'
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
            />

            <fieldset>
                <legend>Gender</legend>

                <label for="radio-choice-1">Male</label>
                <input type="radio" name="radio-choice" id="radio-choice-1" value="choice-1" />

                <label for="radio-choice-2">Female</label>
                <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2" />
            </fieldset>


            <div class="select-wrapper">
                <label for="select-choice">Age:</label>
                <div class="styled-select" for="select-choice">
                    <select name="select-choice" id="select-choice">
                        <option value="Choice 1">Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                    </select>
                </div>

            </div>

            <div class="clr">
                <label for="textarea">Favorite Quote:</label><br />
                <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
            </div>

            <div>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label for="checkbox">I agree to Terms & Conditions</label>
            </div>

            <br /><br />

            <div>
                <input type="submit" value="Submit" />
                <div class="clr"></div>
            </div>
        </form>
    )
}
