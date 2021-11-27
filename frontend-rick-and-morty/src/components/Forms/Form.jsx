import { useRouteMatch } from 'react-router-dom'
import { CharactersViewForm } from './CharactersViewForm'
import { EpisodesViewForm } from './EpisodesViewForm'
import { LocationsViewForm } from './LocationsViewForm'

export const Forms = () => {

    let match = useRouteMatch()

    return (
        <div>
            {
                match('/characters') ? < CharactersViewForm />
                : match('/episodes') ? <EpisodesViewForm />
                : match('/locations') ? <LocationsViewForm />
                : null
            }
        </div>
    )
}
