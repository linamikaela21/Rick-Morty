import './../../../styles/CardDetails.scss'
import { useState } from "react"
import '../../../styles/Accordion.scss'

import { Link } from 'react-router-dom'

export const CardDetails = (props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='columnDetailsContent' style={{ height: '', width: '' }}>
            <div><h2 className='cardTitle'>{props.name}</h2></div>
            <div className='rowDetailsContent' style={{ height: '19.5em', width: '58rem' }}>
                <div className='columnContent' style={{ height: '100%', width: '30%' , backgroundColor:'blue'}}>
                    <h3 className='cardText'>{props.textOne}</h3>
                    <h3 className='cardText'>{props.textTwo}</h3>
                    <h3 className='cardText'>{props.textThree}</h3>
                    <h3 className='cardText'>{props.textFour}</h3>
                </div>
                <div className='columnContent'>
                    <iframe className='iframe' src={props.image} title={props.name} width='100%' height='98%'></iframe>
                </div>
                <div className='columnContent' style={{ width: '30%', backgroundColor:'red' }}>
                    <div className="accordion-item">
                {!isActive && <div className="accordion-content" onClick={() => setIsActive(!isActive)}>{props.textElections}</div>}
                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                        {isActive && <div className="accordion-content"><span>{props.elections}</span></div>}
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
