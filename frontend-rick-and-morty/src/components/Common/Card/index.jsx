import './../../../styles/Card.scss'
import './../../../styles/Commun/index.scss'

export const Card = (props) => {
    return (
        <div className='columnContent'>
            <div className='divBtnClose'>
                <button className='btnClose'
                    onClick={props.onClick}
                    style={{  marginRight: '0.5rem', marginTop: '0.5rem' }}>
                    X
                </button>
            </div>
            <div>
                <h2 className='cardTitle'>{props.name}</h2>
            </div>
            <div className='rowContainer'>
                <iframe className='iframe' src={props.image} title={props.name} width='300wv' height='300hv'></iframe>
                <div className='columnContent'>
                    <h3 className='cardText'>{props.textOne}</h3>
                    <h3 className='cardText'>{props.textTwo}</h3>
                </div>
            </div>
        </div>
    )
}
