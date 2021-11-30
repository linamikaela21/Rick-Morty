import { Card } from "../Common/Card"
import { Pagination } from "../Common/Pagination/Pagination"

export const ViewCharacters = ({ characters, charactersPerPage, allCharacters, pages }) => {

    return (
        <div style={{ display: 'block', justifyContent: 'center' }}>
            <div className='rowContainer'>
                <Pagination
                    perPage={charactersPerPage}
                    all={allCharacters}
                    pages={pages}
                />
            </div>
            <div className='rowContainer'>
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
            </div>
        </div>
    )
}