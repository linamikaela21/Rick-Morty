export const ViewEpisodes = (props) => {
    console.log(props.episodes.characters)
    return (
        <div className='container'>
            {
                props.episodes?.map(epi => (
                    <>
                        <h3>{epi.name}</h3>
                        {epi.characters?.map(cha => (
                                <ul><li key={epi.characters.id}>{cha.name}</li></ul>
                            ))
                        }
                    </>
                ))}
        </div>
    )
}