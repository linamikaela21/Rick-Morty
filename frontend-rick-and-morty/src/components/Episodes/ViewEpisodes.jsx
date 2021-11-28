import './../../styles/Episodes.scss'

export const ViewEpisodes = (props) => {

    return (
        <div className='container'>
            {
                props.episodes?.map(epi => (
                    <div className='columnContainer' style={{ width: '100%' }}>
                        <div className='rowContainer'><h3>{epi.name}</h3></div>
                        <div className='rowContainer'>
                            {
                                epi.characters?.map(cha => (
                                    <div className='container'>
                                        <ul>
                                            <li key={cha?.id}><label>{cha?.name}</label></li>
                                        </ul>
                                    </div>

                                ))
                            }
                        </div>
                    </div >
                ))}
        </div>
    )
}



