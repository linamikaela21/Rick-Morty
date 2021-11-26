import './../../../styles/BigCard.scss'
import './../../../styles/Commun/index.scss'

import { Link } from 'react-router-dom'

export const BigCard = (props) => {
    return (
        <div className='bigCardContent'>
            <img src={props.image} alt='No found' className='image' />
            <div className="middle">
                <h2 className='bigCardText'>{props.title}</h2>
                <Link to={`/${props.link}`}>
                    <button className='button'>Go</button>
                </Link>

            </div>
        </div>
    )
}
