import './../../../styles/CardDetails.scss'
import { useState } from "react"
import '../../../styles/Accordion.scss'

import { Link } from 'react-router-dom'

export const CardDetails = (props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='columnDetailsContent' style={{ height: '600px', width: '1000px' }}>
            <div><h2 className='cardTitle'>{props.name}</h2></div>
            <div className='rowDetailsContent'>
                <div className='columnContent' style={{ height: '350px', width: '350px' }}>
                    <iframe src={props.image} title={props.name} width='300px' height='300px'></iframe>
                </div>
                <div className='columnContent' style={{ height: '350px', width: '350px' }}>
                    <h3 className='cardText'>{props.textOne}</h3>
                    <h3 className='cardText'>{props.textTwo}</h3>
                    <h3 className='cardText'>{props.textThree}</h3>
                    <h3 className='cardText'>{props.textFour}</h3>
                </div>
                <div className='columnContent' style={{ height: '350px', width: '350px' }}>
                    <div className="accordion-item">
                {!isActive && <div className="accordion-content" onClick={() => setIsActive(!isActive)}>{props.textElections}</div>}
                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                        {isActive && <div className="accordion-content">{props.elections}</div>}
                    </div>
                </div>
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
