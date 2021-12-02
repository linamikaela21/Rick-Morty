import './../../../styles/BigCard.scss'
import './../../../styles/Commun/index.scss'

import { Link } from 'react-router-dom'

export const BigCard = (props) => {
    return (
        <div className='bigCardContent'>
            <img src={props.image} alt='No found' className='iframe' height={props.height} width={props.width}/>
            <div className="middle">
                <div className=''>
                    <h2 className='bigCardText'>{props.title}</h2>
                </div>
                <div className='container'>
                    <Link to={`/${props.link}`}>
                        <button className='button'>{props.buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
