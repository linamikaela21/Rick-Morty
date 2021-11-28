export const Select = (props) => {
    return (
        <div class='select-wrapper'>
        <label for='select-choice'>{props.label}</label>
        <div class='styled-select' for='select-choice'>
            <select name='select-choice' id='select-status'>
                <option value={props.optionOne}>{props.optionOne}</option>
                <option value={props.optionTwo}>{props.optionTwo}</option>
                <option value={props.optionThree}>{props.optionThree}</option>
            </select>
        </div>
    </div>
    )
}
