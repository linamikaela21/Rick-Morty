import { SearchBarView } from './ViewSearchBar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterName } from '../../redux/actions/characterActions'
import { getEpisodeName } from '../../redux/actions/episodesActions'
import { getLocationName } from '../../redux/actions/locationsActions'
import { Filters } from './Filters/Filters'

export const SearchBar = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

    const handleSubmitSearchBar = e => {
        e.preventDefault()
        dispatch(getCharacterName(search))
        dispatch(getEpisodeName(search))
        dispatch(getLocationName(search))
        //Esto es para borrar el imput despues de la busqueda
        setSearch(prev => [...prev, search])
        setSearch(search)
        setSearch('')
    }

    const onChangeSearchBar = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <div className='searchContainer'>
            <div style={{ border: '2px solid red', padding: '15px' }}>
                <SearchBarView
                    onChange={onChangeSearchBar}
                    handleSubmitSearchBar={handleSubmitSearchBar}
                    search={search}
                    setSearch={setSearch}
                />
            </div>
            <div style={{ border: '2px solid red', padding: '15px' }}>
                <Filters />
            </div>
        </div>
    )
}
