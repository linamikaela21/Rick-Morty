export const Check = (props) => {
    return (
        <div>
            <fieldset>
                <legend>Gender</legend>

                <label for='radio-choice-1'>{props.optionOne}</label>
                <input type='radio' name='radio-choice' id='radio-choice-1' value='choice-1' />

                <label for='radio-choice-2'>{props.optionTwo}</label>
                <input type='radio' name='radio-choice' id='radio-choice-2' value='choice-2' />
            </fieldset>
        </div>
    )
}
