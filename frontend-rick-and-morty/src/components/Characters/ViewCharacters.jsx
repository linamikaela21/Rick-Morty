import { Card } from "../Common/Card"

export const ViewCharacters = ({ characters, next, prev, pages }) => {
    return (
        <div className='columnContainer'>
            <div className='rowContainer'>
                        <button
                            onClick={prev}
                            disabled={pages <= 0}
                        >
                            {'<--PREV'}
                        </button>
                {characters?.map(char => (
                    <div>
                        <Card
                            key={char.id}
                            name={char.name}
                            image={char.image}
                            buttonText='Show me more'
                            link={`characters/${char.id}`}
                            height='500px'
                        />
                    </div>
                ))}
                        <button
                            onClick={next}
                            disabled={characters.length < 4}
                        >
                            {'NEXT -->'}
                        </button>
            </div>
        </div>
    )
}