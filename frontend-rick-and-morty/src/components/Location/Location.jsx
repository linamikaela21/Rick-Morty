import { ViewLocation } from "./ViewLocation"
import { useSelector } from "react-redux"

export const Location = () => {
    const location = useSelector(state => state.location)
    return (
        <div>
            <ViewLocation
            location={location}
            />
        </div>
    )
}
