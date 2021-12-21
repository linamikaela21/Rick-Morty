import { BigCard } from '../Common/BigCard'
import './../../styles/Home.scss'
import episodes from '../../Images/rick-morty-episodes.jpg'
import characters from '../../Images/rick-morty-characters.jpg'
import locations from '../../Images/rick-morty-location.jpg'

export const ViewHome = () => {
    return (
        <div className='homeContent' style={{ height: '54vh'}}>
            <BigCard
                title='Episodes'
                image={episodes}
                link='episodes'
                height='380em'
                width='380em'
                buttonText='GO'
            />
            <BigCard
                title='Characters'
                image={characters}
                link='characters'
                height='380em'
                width='380em'
                buttonText='GO'
            />
            <BigCard
                title='Locations'
                image={locations}
                link='locations'
                height='380em'
                width='380em'
                buttonText='GO'
            />
        </div>
    )
}
