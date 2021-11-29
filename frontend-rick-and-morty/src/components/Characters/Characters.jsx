import { ViewCharacters } from "./ViewCharacters"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { SearchBar } from "../SearchBar/SearchBar"
import { getCharacters } from "../../redux/actions/characterActions"
import { FilterCharacters } from "../SearchBar/Filters/FilterCharacters"

export const Characters = () => {

    const characters = useSelector(state => state.characters)

    const dispatch = useDispatch()

    const [pages, setPages] = useState(0)
    const [order, setOrder] = useState('ASC')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(getCharacters(pages, order, filter))
    }, [dispatch, pages, order, filter])

    const handdleClick = (e) => {
        e.preventDefault()
        dispatch(getCharacters(pages, order, filter))
    }

    //PAGINADO
    const prev = (e) => {
        e.preventDefault()
        if(pages <= 0) setPages(0)
        else setPages(pages - 4)
    }

    const next = (e) => {
        e.preventDefault()
        if(characters.length < 4) return
        else setPages(pages + 4)
    }

    //ORDENAMIENTO
    const changeOrder = (e) => {
        e.preventDefault()
        setOrder(e.target.value)
    }

    //FILTRADO
    const changeFilter = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
    }

    console.log(characters.length)

    return (
        <div className=''>
            <div className='navContainer'>
                <SearchBar />
                <FilterCharacters 
                changeFilter={changeFilter}
                changeOrder={changeOrder}
                />
            </div>
            <div className='rowContainer'>
                <ViewCharacters 
                characters={characters}
                prev={prev}
                next={next}
                pages={pages}
                />
            </div>
        </div>
    )
}

