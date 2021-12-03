import './../../../styles/Card.scss'
import './../../../styles/Commun/index.scss'

export const Card = (props) => {
    return (
        <div className='columnContent'>
                <div className='divBtnClose'>
                <button className='btnClose'
                    onClick={props.onClick}
                    style={{width: '2rem', height: '2rem', marginRight: '2rem', marginTop: '2rem' }}>
                    X
                </button>
                </div>
                <div><h3 className='cardTitle'>{props.name}</h3></div>
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
