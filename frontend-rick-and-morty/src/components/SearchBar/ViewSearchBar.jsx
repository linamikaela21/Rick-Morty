import { FiSearch } from 'react-icons/fi'

import './../../styles/SearchBar.scss'
import './../../styles/Commun/index.scss'


export const SearchBarView = ({
    handleSubmitSearchBar,
    setSearch,
    search
}) => {

    return (
        <div className='containerSearchBar'>
            <div style={{display:'flex', justifyContent:'flex-end', alignContent: 'flex-end'}}><FiSearch size={100} style={{ color: 'white' }} />
                <input
                    type='text'
                    placeholder='Search..'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='inputSearchBar'
                />
            <input
                type='submit'
                className='button'
                onClick={(e) => handleSubmitSearchBar(e)}
                />
                </div>
        </div>
    )
}

