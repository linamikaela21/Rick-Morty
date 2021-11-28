import { ViewLocation } from "./ViewLocation"
import { useSelector } from "react-redux"
import { LocationsViewForm } from "../Forms/LocationsViewForm"
import { SearchBar } from "../SearchBar/SearchBar"

export const Location = () => {

    const locations = useSelector(state => state.locations)

    return (
        <div className=''>
            <div className='navContainer'>
                <SearchBar />
            </div>
            <div className='rowContainer'>
                <div className='columnContainer'>
                    <ViewLocation locations={locations} />
                </div>
                <div className='columnContainer'>
                    <LocationsViewForm />
                </div>
            </div>
        </div>
    )
}

