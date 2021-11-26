import { CardDetails } from "../Common/CardDetails"
import { useSelector } from 'react-redux'

export const ViewCharacterDetails = (props) => {

    const details = useSelector(state => state.details)

    console.log(details, 'ARTEEEEEEEeee')
    return (
        <div className='container'>
               <CardDetails
               key={details.id}
               name={details.name}
               image={details.image}
               textOne={`Species: ${details.species}`}
               textTwo={`Gender: ${details.gender}`}
               textThree={`Status: ${details.status}`}
               link='home'
               buttonText='Go Back'
               />
           )
    </div>
    )
}
