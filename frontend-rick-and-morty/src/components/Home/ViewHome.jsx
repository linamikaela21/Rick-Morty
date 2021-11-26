import { BigCard } from '../Common/BigCard'
import './../../styles/Home.scss'
import episodes from '../../Images/rick-morty-episodes.jpg'
import characters from '../../Images/rick-morty-characters.jpg'
import locations from '../../Images/rick-morty-location.jpg'

export const ViewHome = () => {
    return (
        <div className='homeContent'>
            <BigCard
                title='Episodes'
                image={episodes}
                link='episodes'
            />
            <BigCard
                title='Characters'
                image={characters}
                link='characters'
            />
            <BigCard
                title='Locations'
                image={locations}
                link='locations'
            />
        </div>
    )
}
