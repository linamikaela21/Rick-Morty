import { ViewEpisodes } from "./ViewEpisodes"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { EpisodesViewForm } from "../Forms/EpisodesViewForm"
import { SearchBar } from "../SearchBar/SearchBar"
import { FilterEpisodes } from "../SearchBar/Filters/FilterEpisodes"
import { getEpisodesQuery } from "../../redux/actions/episodesActions"

export const Episodes = () => {

    //PAGINADO
    const allEpisodes = useSelector(state => state.episodes)

    const [currentPage, setCurrentPage] = useState(1)
    const episodesPerPage = 4
    const lastEpisode = currentPage * episodesPerPage
    const firstEpisode = lastEpisode - episodesPerPage
    const episodes = allEpisodes.slice(firstEpisode, lastEpisode)

    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const dispatch = useDispatch()

    const [order, setOrder] = useState('ASC')
    // const [episode, setEpisode] = useState('')

    useEffect(() => {
        dispatch(getEpisodesQuery(order))
    }, [dispatch, order])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getEpisodesQuery(order))
    }

    // //ORDENAMIENTO
    const changeOrder = (e) => {
        e.preventDefault()
        setOrder(e.target.value)
    }

    // //FILTRADO
    // const orderEpisode = (e) => {
    //     e.preventDefault()
    //     setEpisode(e.target.value)
    //}

    return (
        <div className=''>
            <div className='navContainer'>
                <SearchBar />
                <FilterEpisodes
                    changeOrder={changeOrder}
                />
            </div>
            <div className='rowContainer'>
                <div className='columnContainer'>
                    <ViewEpisodes
                        allEpisodes={allEpisodes}
                        episodes={episodes}
                        episodesPerPage={episodesPerPage}
                        pages={pages} />
                </div>
                <div className='columnContainer'>
                    <EpisodesViewForm

                    />
                </div>
            </div>
        </div>
    )
}
