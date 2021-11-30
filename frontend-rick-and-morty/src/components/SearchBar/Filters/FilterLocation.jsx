import { useSelector } from "react-redux"

export const FilterLocation = (props) => {

    const locations = useSelector(state => state.locations)

    let location = locations.map(t => t.type)
    let unique = [...new Set(location)]

    return (
        <div className='container'>
            <div className='navlink'>
                <span className='span'>Order by Order</span>
                <select onChange={props.changeOrder}>
                    <option value='ASC'>ASCENDENTE</option>
                    <option value='DESC'>DESCENDENTE</option>
                </select>
            </div>

            <div className='navlink'>
                <span className='span'>Order by Type</span>
                <select onChange={props.changeType}>
            {
                unique.map(ty => {
                return (
                <option key={ty} value={ty}>{ty}</option>
            )})
            }
            </select>
            </div>

            <div className='navlink'>
                <span className='span'>Dimension by Order</span>
                <select onChange={props.changeOrder}>
                    <option value='A'>ASCENDENTE</option>
                    <option value='Z'>DESCENDENTE</option>
                </select>
            </div>

        </div>
    )

}



