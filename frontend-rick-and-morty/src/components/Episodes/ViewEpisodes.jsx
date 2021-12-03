import { Pagination } from '../Common/Pagination/Pagination'

export const ViewEpisodes = ({ episodes, episodesPerPage, allEpisodes, pages, handleDeleteEpisode }) => {

    return (
        <div className='container'>
            <Pagination
                perPage={episodesPerPage}
                all={allEpisodes}
                pages={pages}
            />
            {episodes?.map(epi => (
                <div className='columnContainer' style={{ width: '80%', backgroundColor:'#a9a4b9', borderColor:'#222059' }}>
                    <div className='divBtnClose'>
                        <button className='btnClose' key={epi.id}
                            onClick={e => handleDeleteEpisode(e, epi.id)}
                            style={{ width: '3em', height: '3em' }}>
                            X
                        </button>
                    </div>
                    <div className='rowContainer'><h3 style={{ color:'#222059' }}>{epi.name} - {epi?.episode?.charAt(2)}</h3></div>
                    <div className='rowContainer'>
                        {
                            epi?.characters?.map(cha => (
                                <div className='container'>
                                    <ul className='rowDetailsContent'>
                                        <li key={cha?.id}>
                                            <label>{cha?.name}</label>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div >
            ))}
        </div>
    )
}



