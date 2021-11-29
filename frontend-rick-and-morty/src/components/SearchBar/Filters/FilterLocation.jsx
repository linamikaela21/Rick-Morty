import { useSelector } from "react-redux"

export const FilterLocation = (props) => {

    const locations = useSelector(state => state.locations)

    let location = locations.map(t => t.type)
    let unique = [...new Set(location)]

    return (
        <div>
            <div>
                <h4>Order by Order</h4>
                <select onChange={props.changeOrder}>
                    <option value='ASC'>ASCENDENTE</option>
                    <option value='DESC'>DESCENDENTE</option>
                </select>
            </div>

            <div>
                <h4>Order by Type</h4>
                <select onChange={props.changeFilter}>
            {
                unique.map(ty => {
                return (
                <option key={ty} value={ty}>{ty}</option>
            )})
            }
            </select>
            </div>

        </div>
    )

}



