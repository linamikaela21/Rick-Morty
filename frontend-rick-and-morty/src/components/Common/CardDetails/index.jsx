import './../../../styles/CardDetails.scss'
import { useState } from "react"
import '../../../styles/Accordion.scss'

export const CardDetails = (props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='columnDetailsContent'>
            <div><h1 className='cardTitle'>{props.name}</h1></div>
            <div className='rowDetailsContent' style={{ height: '60%', width: '100%' }}>
                <div className='columnContent' style={{ height: '22rem', width: '21rem', backgroundColor:'#2f2b91'}}>
                    <h3 className='cardText'>{props.textOne}</h3>
                    <h3 className='cardText'>{props.textTwo}</h3>
                    <h3 className='cardText'>{props.textThree}</h3>
                    <h3 className='cardText'>{props.textFour}</h3>
                </div>
                <div className='columnContent' style={{display:'flex', justifyContent:'center', height: '22rem', width: '21rem', backgroundColor:'#2f2b91'}}>
                    <iframe className='iframe' src={props.image} title={props.name} width='300rem' height='300rem'></iframe>
                </div>
                <div className='columnContent' style={{ height: '22rem', width: '21rem', backgroundColor:'#2f2b91' }}>
                    <div className="accordion-item" style={{color:'white'}}>
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
