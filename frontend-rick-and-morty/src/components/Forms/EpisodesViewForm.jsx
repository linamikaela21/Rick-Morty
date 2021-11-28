import { Input } from './Input'

export const EpisodesViewForm = (props) => {
    return (
        <form className='form'>
            <Input
                label='Episode Name'
                type='text'
                placeholder='Enter a name'
                value={props.name}
            // onChange={(e) => props.setName(e.target.value)}
            />
            <div className='inputContainer'>
                    <fieldset style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
                        <legend>Characters</legend>
                        <div style={{ width: '100%'}}>
                            <Input
                                type='text'
                                placeholder='Enter characters'
                                value={props.name}
                            // onChange={(e) => props.setName(e.target.value)}
                            />
                        </div>
                            <div className='rowContainer'><button className='button' style={{ backgroundColor: 'blue' }}>Add Character</button></div>
                    </fieldset>
            </div>
            <div className='rowContainer'><button className='button'>Create Episode</button></div>
        </form>
    )
}
