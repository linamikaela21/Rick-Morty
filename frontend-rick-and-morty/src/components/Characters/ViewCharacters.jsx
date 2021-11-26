import { Card } from "../Common/Card"

export const ViewCharacters = (props) => {
    console.log(props, ' stooooooooooy aacaaaaaa')
    return (
        <div className='container'>
           { props.characters?.map(char => (
               <Card
               key={char.id}
               name={char.name}
               image={char.image}
               buttonText='Show me more'
               link={`characters/${char.id}`}
               />
           ))}
    </div>
    )
}