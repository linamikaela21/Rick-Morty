import { Pagination } from "../Common/Pagination/Pagination"

export const ViewLocation = ({ locations, locationsPerPage, allLocations, pages }) => {
    return (
        <div className='container'>
            <Pagination
                perPage={locationsPerPage}
                all={allLocations}
                pages={pages}
            />
            {
                locations?.map(loc => (
                    <div className='columnContainer' style={{ width: '100%' }}>
                        <div className='rowContainer'><h3>{loc.name}</h3></div>
                        <div className='rowContainer'><h4>{loc.type}</h4></div>
                        <div className='rowContainer'>
                            {
                                loc.locations?.map(cha => (
                                    <div className='container'>
                                        <ul>
                                            <li key={cha?.id}><label>{cha?.name}</label></li>
                                        </ul>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                ))}
        </div>
    )
}