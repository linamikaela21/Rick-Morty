export const ViewEpisodes = (props) => {
    return (
        <div className='container'>
           { props.episodes?.map(epi => (
               <div style={{width: '100%', height: '150px', border: '5px solid red'}}>
                   <h3>{epi.name}</h3>
                   <h4>{epi.episode}</h4>
                   <select name="selectList" id="selectList">
                {/* {
                    epi.characters.map(cha => (
                        <option value={cha.}>{}</option>
                    ))
                } */}
            </select>
               </div>
           ))}
    </div>
    )
}