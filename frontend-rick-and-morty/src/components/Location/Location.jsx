import { ViewLocation } from "./ViewLocation"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { LocationsViewForm } from "../Forms/LocationsViewForm"
import { SearchBar } from "../SearchBar/SearchBar"
import { FilterLocation } from "../SearchBar/Filters/FilterLocation"
import { deleteLocation, getLocations, getLocationsQuery, orderDimension } from "../../redux/actions/locationsActions"

export const Location = () => {

    const dispatch = useDispatch()

    const [order, setOrder] = useState('ASC')
    const [type, setType] = useState('')
    const [dimension, setDimension] = useState('')

    useEffect(() => {
        dispatch(getLocationsQuery(order, type))
    }, [dispatch, order, type])

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

    useEffect(() => {
        dispatch(orderDimension(dimension))
    }, [dispatch, dimension])

    const changeDimension = (e) => {
        e.preventDefault()
        setDimension(e.target.value)
    }

    //PAGINADO
    const allLocations = useSelector(state => state.locations)

    const [currentPage, setCurrentPage] = useState(1)
    const locationsPerPage = 8
    const lastLocation = currentPage * locationsPerPage
    const firstLocation = lastLocation - locationsPerPage
    const locations = allLocations.slice(firstLocation, lastLocation)

    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //DELETE 
    const handleDeleteLocation = (e, id) => {
        e.preventDefault()
        console.log(id)
        let confirm = window.confirm('Do you want to delete this location ?')
        if(confirm) {
            dispatch(deleteLocation(id, 'id'))
            dispatch(getLocations)
            window.location.replace('/locations')
            alert('You deleted this location successfully')
        }
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
                        handleDeleteLocation={handleDeleteLocation}
                    />
                </div>
                <div className='columnContainer'>
                    <LocationsViewForm />
                </div>
            </div>
        </div>
    )
}

