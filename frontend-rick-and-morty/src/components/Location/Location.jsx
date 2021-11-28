import { ViewLocation } from "./ViewLocation"
import { useSelector } from "react-redux"
import { LocationsViewForm } from "../Forms/LocationsViewForm"

export const Location = () => {

    const locations = useSelector(state => state.locations)
    
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

