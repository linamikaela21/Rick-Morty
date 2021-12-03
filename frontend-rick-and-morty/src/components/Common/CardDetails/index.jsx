import './../../../styles/CardDetails.scss'
import { useState } from "react"
import '../../../styles/Accordion.scss'

export const CardDetails = (props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='columnDetailsContent'>
            <div><h2 className='cardTitle'>{props.name}</h2></div>
            <div className='rowDetailsContent' style={{ height: '100%', width: '100%' }}>
                <div className='columnContent' style={{ height: '22rem', width: '21rem', backgroundColor:'blue'}}>
                    <h3 className='cardText'>{props.textOne}</h3>
                    <h3 className='cardText'>{props.textTwo}</h3>
                    <h3 className='cardText'>{props.textThree}</h3>
                    <h3 className='cardText'>{props.textFour}</h3>
                </div>
                <div className='columnContent' style={{display:'flex', justifyContent:'center', height: '22rem', width: '21rem', backgroundColor:'blue'}}>
                    <iframe className='iframe' src={props.image} title={props.name} width='300rem' height='300rem'></iframe>
                </div>
                <div className='columnContent' style={{ height: '22rem', width: '21rem', backgroundColor:'blue' }}>
                    <div className="accordion-item">
                {!isActive && <div className="accordion-content" onClick={() => setIsActive(!isActive)}>{props.textElections}</div>}
                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                        {isActive && <div className="accordion-content"><span>{props.elections}</span></div>}
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}
