import { ViewEpisodes } from "./ViewEpisodes"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { EpisodesViewForm } from "../Forms/EpisodesViewForm"
import { SearchBar } from "../SearchBar/SearchBar"
import { FilterEpisodes } from "../SearchBar/Filters/FilterEpisodes"
import { deleteEpisode, getEpisodes, getEpisodesQuery, orderEpisodesSeason } from "../../redux/actions/episodesActions"

export const Episodes = () => {

    const dispatch = useDispatch()

    const [order, setOrder] = useState('ASC')
    const [season, setSeason] = useState('')

    useEffect(() => {
        dispatch(getEpisodesQuery(order))
    }, [dispatch, order])

    // //ORDENAMIENTO
    const changeOrder = (e) => {
        e.preventDefault()
        setOrder(e.target.value)
    }

    // //FILTRADO
    const orderSeason = (e) => {
        e.preventDefault()
        setSeason(e.target.value)
    }

    useEffect(() => {
        dispatch(getEpisodesQuery)
        dispatch(orderEpisodesSeason(season))
        setSeason('')
    }, [dispatch, season])

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

    //DELETE
    const handleDeleteEpisode = (e, id) => {
        e.preventDefault()
        console.log(id)
        let confirm = window.confirm('Do you want to delete this episode ?')
        if(confirm) {
            dispatch(deleteEpisode(id, 'id'))
            dispatch(getEpisodes)
            window.location.replace('/episodes')
            alert('You deleted this episode successfully')
        }
    }


    return (
        <div className=''>
            <div className='navContainer'>
                <SearchBar />
                <FilterEpisodes
                    changeOrder={changeOrder}
                    orderSeason={orderSeason}
                />
            </div>
            <div className='rowContainer'>
                <div className='columnContainer'>
                    <ViewEpisodes
                        allEpisodes={allEpisodes}
                        episodes={episodes}
                        episodesPerPage={episodesPerPage}
                        pages={pages}
                        handleDeleteEpisode={handleDeleteEpisode}
                    />
                </div>
                <div className='columnContainer'>
                    <EpisodesViewForm />
                </div>
            </div>
        </div>
    )
}
