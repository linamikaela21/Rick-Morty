export const Input = (props) => {
    return (
        <div className='inputContainer'>
            <div className='rowContainer'>
            <label
                htmlFor={props.label}>
                {props.label}
            </label>
            </div>
            <div className='rowContainer'>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            </div>
        </div>
    )
}
