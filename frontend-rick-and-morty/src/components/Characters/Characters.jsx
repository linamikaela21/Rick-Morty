import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { SearchBar } from "../SearchBar/SearchBar"
import { ViewCharacters } from "./ViewCharacters"
import { getCharacters } from "../../redux/actions/characterActions"
import { FilterCharacters } from "../SearchBar/Filters/FilterCharacters"

export const Characters = () => {


    //PAGINADO
    const allCharacters = useSelector(state => state.characters)
    const [currentPage, setCurrentPage] = useState(1)
    const charactersPerPage = 3
    const lastCharacter = currentPage * charactersPerPage
    const firstCharacter = lastCharacter - charactersPerPage
    const characters = allCharacters.slice(firstCharacter, lastCharacter)

    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const dispatch = useDispatch()

    const [order, setOrder] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        dispatch(getCharacters(order, status, gender))
    }, [dispatch, order, status, gender])

    const haldleClick = (e) => {
        e.preventDefault()
        dispatch(getCharacters(order, status, gender))
    }

    //ORDENAMIENTO
    const changeOrder = (e) => {
        e.preventDefault()
        setOrder(e.target.value)
    }

    //FILTRADO
    const changeStatus = (e) => {
        e.preventDefault()
        setStatus(e.target.value)
    }

    const changeGender = (e) => {
        e.preventDefault()
        setGender(e.target.value)
    }

    return (
        <div className=''>
            <div className='navContainer'>
                <SearchBar />
                <FilterCharacters
                    changeStatus={changeStatus}
                    changeGender={changeGender}
                    changeOrder={changeOrder}
                />
            </div>
            <div className='rowContainer'>
                <ViewCharacters
                    characters={characters}
                    charactersPerPage={charactersPerPage}
                    allCharacters={allCharacters}
                    pages={pages}
                />
            </div>
        </div>
    )
}

