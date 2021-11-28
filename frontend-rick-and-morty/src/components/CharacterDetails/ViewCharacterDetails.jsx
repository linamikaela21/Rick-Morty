import { CardDetails } from "../Common/CardDetails"
import { useSelector } from 'react-redux'

export const ViewCharacterDetails = () => {

    const details = useSelector(state => state.details)

    return (
        <div className='container'>
            {details.episodes?.map(ep => (
            <CardDetails
                key={details.id}
                name={details.name}
                image={details.image}
                textOne={`Species: ${details.species}`}
                textTwo={`Gender: ${details.gender}`}
                textThree={`Status: ${details.status}`}
                textFour={`Location: ${details.location?.name}`}
                elections='Characters'
                textElections={ep?.name}
                link='home'
                buttonText='Go Back'
            />
            ))}
        </div>
    )
}

