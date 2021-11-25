import { Route, Routes } from "react-router-dom"
import { Home } from '../components/Home/Home'
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails'
import { EpisodeDetails } from '../components/EpisodeDetails/CharacterDetails'
import { NotFound } from '../components/NotFound/NotFound'


export const RouterWeb = () => {

  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      {/* <Route exact path='/characters' element={} />
      <Route exact path='/episodes' element={Catalogue} /> */}
      <Route exact path='/character/:id' element={<CharacterDetails/>} />
      <Route exact path='/episode/:id' element={<EpisodeDetails/>} />
      <Route element={<NotFound/>} />
    </Routes>
  )
}