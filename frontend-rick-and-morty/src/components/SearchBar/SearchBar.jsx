import { SearchBarView } from './ViewSearchBar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { getRecipeByName } from '../../redux/actions/index'

export const SearchBar = () => {

    const [name, setName] = useState('')

    //   const dispatch = useDispatch(getRecipeByName)

    const handleChangeSearchBar = e => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmitSearchBar = (e) => {
        e.preventDefault()
        // dispatch(getRecipeByName(name))
        //Esto es para borrar el imput despues de la busqueda
        setName('')
    }

    return (
        <div>
            <SearchBarView
                handleChangeSearchBar={handleChangeSearchBar}
                handleSubmitSearchBar={handleSubmitSearchBar}
            />
        </div>
    )
}
