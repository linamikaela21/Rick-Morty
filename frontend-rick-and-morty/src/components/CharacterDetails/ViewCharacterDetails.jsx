import { CardDetails } from "../Common/CardDetails"
import { useSelector } from 'react-redux'

export const ViewCharacterDetails = (props) => {

    const details = useSelector(state => state.details)

    return (
        <div className='container'>
            <CardDetails
                key={details.id}
                name={details.name}
                image={details.image}
                textOne={`Species: ${details.species}`}
                textTwo={`Gender: ${details.gender}`}
                textThree={`Status: ${details.status}`}
                textFour={`Location: ${details.location?.name}`}
                textFive={
                    details.episodes?.map(ep => (
                        <h3>{ep?.name}</h3>
                    ))
                }
                link='home'
                buttonText='Go Back'
            />
            )
        </div>
    )
}
