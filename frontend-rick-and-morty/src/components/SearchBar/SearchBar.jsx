import { SearchBarView } from './ViewSearchBar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterName } from '../../redux/actions/characterActions'
import { getEpisodeName } from '../../redux/actions/episodesActions'
import { getLocationName } from '../../redux/actions/locationsActions'

export const SearchBar = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

    const handleSubmitSearchBar = e => {
        e.preventDefault()
        dispatch(getCharacterName(search))
        dispatch(getEpisodeName(search))
        dispatch(getLocationName(search))
        setSearch(prev => [...prev, search])
        setSearch(search)
        setSearch('')
        console.log(search)
    }

    return (
        <div className='searchContainer'>
            <div style={{ border: '2px solid red', padding: '15px' }}>
                <SearchBarView
                    handleSubmitSearchBar={handleSubmitSearchBar}
                    search={search}
                    setSearch={setSearch}
                />
            </div>
        </div>
    )
}
