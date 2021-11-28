import { ViewLocation } from "./ViewLocation"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getLocations } from '../../redux/actions/locationsActions'
import { LocationsViewForm } from "../Forms/LocationsViewForm"

export const Location = () => {

    const dispatch = useDispatch()

    const locations = useSelector(state => state.locations)

    useEffect(() => {
        const fetchData = async () => {
            dispatch(getLocations())
        }
        fetchData()
    }, [dispatch])


    return (
        <div className='rowContainer'>
            <div className='columnContainer'>
                <ViewLocation locations={locations} />
            </div>
            <div className='columnContainer'>
                <LocationsViewForm />
            </div>
        </div>
    )
}

