import { ViewEpisodes } from "./ViewEpisodes"
import { useSelector } from "react-redux"
import { EpisodesViewForm } from "../Forms/EpisodesViewForm"
import { SearchBar } from "../SearchBar/SearchBar"
import { FilterEpisodes } from "../SearchBar/Filters/FilterEpisodes"

export const Episodes = () => {

    const episodes = useSelector(state => state.episodes)

    return (
        <div className=''>
        <div className='navContainer'>
            <SearchBar />
            <FilterEpisodes />
        </div>
        <div className='rowContainer'>
            <div className='columnContainer'>
                <ViewEpisodes episodes={episodes} />
            </div>
            <div className='columnContainer'>
                <EpisodesViewForm  />
            </div>
        </div>
        </div>
    )
}
