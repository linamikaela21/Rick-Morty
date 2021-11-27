export const Input = (props) => {
    return (
        <div>
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
                id={props.name}
                placeholder={props.placeholder}
            />
            </div>
        </div>
    )
}
