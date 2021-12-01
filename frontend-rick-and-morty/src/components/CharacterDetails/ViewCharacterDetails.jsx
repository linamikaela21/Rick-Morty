import { CardDetails } from "../Common/CardDetails"
import { useSelector } from 'react-redux'

export const ViewCharacterDetails = () => {

    const details = useSelector(state => state.details)

    console.log(details)

    return (
        <div className='container'>
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
            )
        </div>
    )
}

