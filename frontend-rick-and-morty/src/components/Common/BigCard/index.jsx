import './../../../styles/BigCard.scss'
import './../../../styles/Commun/index.scss'

import { Link } from 'react-router-dom'

export const BigCard = (props) => {
    return (
        <div className='bigCardContent'>
            <img src={props.image} alt='No found' className='image' />
            <div className="middle">
                <div className='container'>
                    <h2 className='bigCardText'>{props.title}</h2>
                </div>
                <div className='container'>
                    <Link to={`/${props.link}`}>
                        <button className='button'>Go</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
