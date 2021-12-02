import { Pagination } from "../Common/Pagination/Pagination"

export const ViewLocation = ({ locations, locationsPerPage, allLocations, pages, handleDeleteLocation }) => {
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
                        <div className='divBtnClose'>
                            <button className='btnClose' key={loc.id}
                                onClick={e => handleDeleteLocation(e, loc.id)}
                                style={{ width: '3em', height: '3em' }}>
                                X
                            </button>
                        </div>
                        <div className='rowContainer'>
                            <h3 className='cardTitle'>{loc.name.toUpperCase()}</h3>
                            <h4 className='cardText' style={{ paddingLeft: '0.5rem' }}>({loc.type} - {loc.dimension})</h4></div>
                        <div className='rowContainer'>
                            {
                                loc.characters?.map(cha => (
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