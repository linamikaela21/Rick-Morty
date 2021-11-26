import { ViewEpisodes } from "./ViewEpisodes"
import { useSelector } from "react-redux"

export const Episodes = () => {
    const episodes = useSelector(state => state.episodes)
    return (
        <div>
            <ViewEpisodes
            episodes={episodes}
            />
        </div>
    )
}
