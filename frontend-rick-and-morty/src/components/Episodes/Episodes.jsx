import { ViewEpisodes } from "./ViewEpisodes"
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { EpisodesViewForm } from "../Forms/EpisodesViewForm"
import { getEpisodes } from '../../redux/actions/episodesActions'



export const Episodes = () => {

    const dispatch = useDispatch()
    
    const episodes = useSelector(state => state.episodes)

    useEffect(() => {
        const fetchData = async () => {
            dispatch(getEpisodes())
        }
        fetchData()
    }, [dispatch])


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
