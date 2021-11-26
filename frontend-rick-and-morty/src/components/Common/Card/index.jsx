import './../../../styles/Card.scss'
import './../../../styles/Commun/index.scss'

import { Link } from 'react-router-dom'

export const Card = (props) => {
    return (
        <div className='columnContent' style={{ height: `${props.height}`, width: `${props.width}` }}>
            <div><h2 className='cardTitle'>{props.name}</h2></div>
            <div className='rowContent'>
                <div className='divCard'>
                    <iframe src={props.image} title={props.name} width='300px' height='300px'></iframe>
                </div>
                <div className='divCard'>
                    <h3 className='cardText'>{props.textOne}</h3>
                    <h3 className='cardText'>{props.textTwo}</h3>
                    <h3 className='cardText'>{props.textThree}</h3>
                </div>
            </div>
            <div>
                <Link to={`/${props.link}`}>
                    <button className='button'>{props.buttonText}</button>
                </Link>
            </div>
        </div>
    )
}
