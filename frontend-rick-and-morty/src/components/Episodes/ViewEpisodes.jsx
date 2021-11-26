import { Card } from "../Common/Card"

export const ViewEpisodes = (props) => {
    return (
        <div className='container'>
           { props.episodes.map(epi => (
               <Card
               key={epi.id}
               name={epi.name}
               textOne={`episode: ${epi.episode}`}
               />
           ))}
    </div>
    )
}