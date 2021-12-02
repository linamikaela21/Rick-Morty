import { BigCard } from '../Common/BigCard'
import './../../styles/Home.scss'
import episodes from '../../Images/rick-morty-episodes.jpg'
import characters from '../../Images/rick-morty-characters.jpg'
import locations from '../../Images/rick-morty-location.jpg'

export const ViewForms = () => {
    return (
        <div className='homeContent'>
            <BigCard
                title='Create your episodes'
                image={episodes}
                link='episodes'
                height='400em'
                width='400em'
                buttonText='GO'
            />
            <BigCard
                title='Create your characters'
                image={characters}
                link='character'
                height='400em'
                width='400em'
                buttonText='GO'
            />
            <BigCard
                title='Create your locations'
                image={locations}
                link='locations'
                height='400em'
                width='400em'
                buttonText='GO'
            />
        </div>
    )
}
