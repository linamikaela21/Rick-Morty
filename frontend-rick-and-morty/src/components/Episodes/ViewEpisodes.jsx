import './../../styles/Episodes.scss'
import './../../styles/Accordion.scss'
import { useState } from 'react'

export const ViewEpisodes = (props) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className='epiContainer'>
            {
                props.episodes?.map(epi => (
                    <div className='epiContent'>
                        <div className='epiDiv'>
                            <h1>{epi.name}</h1>
                        </div>
                         <div className="accordion-item">
                         {!isActive && <div className="accordion-content" onClick={() => setIsActive(!isActive)}>Characters</div>} 
                         <div>{epi.characters?.map(cha => (
                                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                              {isActive && <div className="accordion-content">{cha.name}</div>} 
                                </div>
                            ))}
                            </div>
                        </div > 
                    </div >
                ))}
        </div>
    )
}


