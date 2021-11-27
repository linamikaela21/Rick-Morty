export const Input = (props) => {
  return (
    <>
        <label> {props.label} </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {/* <p className='is-error'>
      {props.errorMenssage}
    </p> */}
      </>
      )
}
