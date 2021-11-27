import { Input } from './Input'
import { BsCheckSquareFill } from 'react-icons/bs';

export const EpisodesViewForm = (props) => {
    return (
        <form className='form'>
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
            <div className='rowContainer'>
                <Input
                    label='Characters'
                    type='text'
                    placeholder='Enter characters'
                    value={props.name}
                // onChange={(e) => props.setName(e.target.value)}
                />
                <button style={{ backgroundColor: 'transparent', borderRadius: '12px', paddingTop: '5px', paddingBottom: '5px',   textDecoration: 'none' }}>
                    <BsCheckSquareFill size={25} style={{ color: 'green' }} />
                </button>
            </div>
            <div className='rowContainer'><button className='button'>Create Episode</button></div>
        </form>
    )
}
