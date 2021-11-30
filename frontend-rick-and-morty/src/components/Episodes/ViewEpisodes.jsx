import { Pagination } from '../Common/Pagination/Pagination'
import './../../styles/Episodes.scss'

export const ViewEpisodes = ({ episodes, episodesPerPage, allEpisodes, pages }) => {
    return (
        <div className='container'>
            <Pagination
                perPage={episodesPerPage}
                all={allEpisodes}
                pages={pages}
            />
            {episodes?.map(epi => (
                    <div className='columnContainer' style={{ width: '100%' }}>
                        <div className='rowContainer'><h3>{epi.name}</h3></div>
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



