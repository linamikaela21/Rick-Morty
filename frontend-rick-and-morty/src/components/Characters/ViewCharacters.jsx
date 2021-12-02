import { BigCard } from "../Common/BigCard"
import { Carrusel } from "../Common/Carrusel"

export const ViewCharacters = ({ characters, charactersPerPage, allCharacters, pages }) => {

    const carouselItems = 
    allCharacters?.map(char => (
            <BigCard
                key={char.id}
                title={char.name}
                image={char.image}
                buttonText='Show me more'
                link={`characters/${char.id}`}
                height='320vh'
            />
    ))

    return (
        <div className='container'>
            <div className='rowContainer'>
                <Carrusel 
                items={carouselItems}
                n={3}
                />
            </div>
        </div>
    )
}