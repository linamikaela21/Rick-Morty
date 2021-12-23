import { CardDetails } from "../Common/CardDetails"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const ViewCharacterDetails = ({handleDeleteCharacter}) => {

    const details = useSelector(state => state.details)

    console.log(details)

    return (
        <div className='container' 
        style={{ paddingTop: '3rem', paddingBottom: '3rem'}}>
            <div className='columnDetailsContent'>
                <Link to={'/characters'}>
                    <button className='button'>Go Back</button>
                </Link>
            <div>
                <button className='btnClose' key={details.id}
                    onClick={e => handleDeleteCharacter(e, details.id)}
                    style={{ width: '15rem', height: '4rem'}}>
                    <h3>DELETE CHARACTER</h3>
                </button>
            </div>
            <CardDetails
                key={details?.id}
                name={details?.name}
                image={details?.image}
                textOne={`Species: ${details?.species}`}
                textTwo={`Gender: ${details?.gender}`}
                textThree={`Status: ${details?.status}`}
                textFour={`Location: ${details?.location?.name}`}
                textElections='Episodes'
                elections={details?.episodes?.map(x => x.name)}
                link='home'
                buttonText='Go Back'
            />
            </div>
            )
        </div>
    )
}