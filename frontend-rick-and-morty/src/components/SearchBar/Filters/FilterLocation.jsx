import { useSelector } from "react-redux"

export const FilterLocation = (props) => {

    const locations = useSelector(state => state.locations)

    let type = locations.map(t => t?.type)
    let uniqueType = [...new Set(type)]

    let dimension = locations.map(d => d?.dimension)
    let uniqueDimension = [...new Set(dimension)]

    return (
        <div className='searchContainer' style={{padding: '2rem'}}>
            <div className='columnContainer' style={{width:'13rem', borderColor:'transparent'}}>
                <span className='span'>Order by Order</span>
                <select onChange={props.changeOrder}>
                    <option value='ASC'>ASCENDENTE</option>
                    <option value='DESC'>DESCENDENTE</option>
                </select>
            </div>

            <div className='columnContainer' style={{width:'13rem', borderColor:'transparent'}}>
                <span className='span'>Order by Type</span>
                <select onChange={props.changeType}>
                    <option value=''>All</option>
                    {
                        uniqueType.map(ty => {
                            return (
                                <option key={ty} value={ty}>{ty}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className='columnContainer' style={{borderColor:'transparent'}}>
                <span className='span'>Dimension by Order</span>
                <select onChange={props.changeDimension}>
                    <option value=''>All</option>
                    {
                        uniqueDimension.map(d => {
                            return (
                                <option key={d} value={d}>{d}</option>
                            )
                        })
                    }
                </select>
            </div>

        </div>
    )

}



