import { BigCard } from "../Common/BigCard"
import { Carrusel } from "../Common/Carrusel"

export const ViewCharacters = ({ characters, charactersPerPage, allCharacters, pages }) => {

    const carouselItems = 
    allCharacters?.map(char => (
            <BigCard
                key={char.id}
                title={char.name}
                image={char.image}
                buttonText='See more'
                link={`characters/${char.id}`}
                height='350vh'
                fontSize='2rem'
            />
    ))

    return (
            <div>
                <Carrusel 
                items={carouselItems}
                n={3}
                />
            </div>
    )
}