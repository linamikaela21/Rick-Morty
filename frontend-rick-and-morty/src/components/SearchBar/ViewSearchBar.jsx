import { FiSearch } from 'react-icons/fi'

import './../../styles/SearchBar.scss'
import './../../styles/Commun/index.scss'


export const SearchBarView = ({
    onChangeSearchBar,
    handleSubmitSearchBar,
    setSearch,
    search
}) => {

    return (
        <div className='containerSearchBar'>
            <div><FiSearch size={50} style={{ color: 'white' }} /></div>
            <input
                type='text'
                placeholder='Search..'
                value={search}
                onChange={e => setSearch(e.target.value)}
                className='inputSearchBar'
            />
            <button
                type='submit'
                className='button'
                onClick={(e) => handleSubmitSearchBar(e)}
            >
                <span>SEND</span>
            </button>
        </div>
    )
}


