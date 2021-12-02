import './../../../styles/Card.scss'
import './../../../styles/Commun/index.scss'

export const Card = (props) => {
    return (
        <div className='columnContent' width='800wv'>
                <div className='divBtnClose'>
                <button className='btnClose'
                    onClick={props.onClick}
                    style={{width: '3em', height: '3em' }}>
                    X
                </button>
                </div>
                <div><h3 className='cardTitle'>{props.name}</h3></div>
                    <div className='rowContainer'>
                <iframe className='iframe' src={props.image} title={props.name} width='300px' height='300px'></iframe>
            <div className='columnContent'>
                <h3 className='cardText'>{props.textOne}</h3>
                <h3 className='cardText'>{props.textTwo}</h3>
                </div>
            </div>
        </div>
    )
}
