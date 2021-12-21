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
                <div className='columnContainer' style={{ width: '80%', backgroundColor:'#cacaca', borderColor:'#3B4DA9' }}>
                    <div className='divBtnClose'>
                        <button className='btnClose' key={epi.id}
                            onClick={e => handleDeleteEpisode(e, epi.id)}>
                            X
                        </button>
                    </div>
                    <div className='rowContainer'><h3 style={{ color:'#3B4DA9' }}>{epi.name} - {epi?.episode?.charAt(2)}</h3></div>
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



