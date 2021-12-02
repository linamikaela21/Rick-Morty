import { CardDetails } from "../Common/CardDetails"
import { useSelector } from 'react-redux'

export const ViewCharacterDetails = ({handleDeleteCharacter}) => {

    const details = useSelector(state => state.details)

    console.log(details)

    return (
        <div className='container'>
            <div width='80%'>
            <div className='divBtnClose'>
                <button className='btnClose' key={details.id}
                    onClick={e => handleDeleteCharacter(e, details.id)}
                    style={{ width: '3em', height: '3em' }}>
                    X
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

