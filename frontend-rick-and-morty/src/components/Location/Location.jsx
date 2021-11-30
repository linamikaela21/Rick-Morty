import { ViewLocation } from "./ViewLocation"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { LocationsViewForm } from "../Forms/LocationsViewForm"
import { SearchBar } from "../SearchBar/SearchBar"
import { FilterLocation } from "../SearchBar/Filters/FilterLocation"
import { getLocations } from "../../redux/actions/locationsActions"

export const Location = () => {

    //PAGINADO
    const allLocations = useSelector(state => state.locations)

    const [currentPage, setCurrentPage] = useState(1)
    const locationsPerPage = 4
    const lastLocation = currentPage * locationsPerPage
    const firstLocation = lastLocation - locationsPerPage
    const locations = allLocations.slice(firstLocation, lastLocation)

    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const dispatch = useDispatch()

    const [order, setOrder] = useState('ASC')
    const [type, setType] = useState('')
    const [dimension, setDimension] = useState('')

    useEffect(() => {
        dispatch(getLocations(order, type, dimension))
    }, [dispatch, order, type, dimension])

    const handdleClick = (e) => {
        e.preventDefault()
        dispatch(getLocations(order, type, dimension))
    }

    //ORDENAMIENTO
    const changeOrder = (e) => {
        e.preventDefault()
        setOrder(e.target.value)
    }

    //FILTRADO
    const changeType = (e) => {
        e.preventDefault()
        setType(e.target.value)
    }

    const changeDimension = (e) => {
        e.preventDefault()
        setDimension(e.target.value)
    }

    return (
        <div className=''>
            <div className='navContainer'>
                <SearchBar />
                <FilterLocation
                    changeOrder={changeOrder}
                    changeType={changeType}
                    changeDimension={changeDimension}
                />
            </div>
            <div className='rowContainer'>
                <div className='columnContainer'>
                    <ViewLocation
                        allLocations={allLocations}
                        locations={locations}
                        locationsPerPage={locationsPerPage}
                        pages={pages}
                    />
                </div>
                <div className='columnContainer'>
                    <LocationsViewForm />
                </div>
            </div>
        </div>
    )
}

