import { ViewEpisodes } from "./ViewEpisodes"
import { useSelector } from "react-redux"
import { EpisodesViewForm } from "../Forms/EpisodesViewForm"

export const Episodes = () => {
    const episodes = useSelector(state => state.episodes)
    return (
        <div className='rowContainer'>
            <div className='columnContainer'>
                <ViewEpisodes episodes={episodes} />
            </div>
            <div className='columnContainer'>
                <EpisodesViewForm />
            </div>
        </div>
    )
}
