import { Route, Routes } from "react-router-dom"
import { Home } from '../components/Home/Home'
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails'
import { EpisodeDetails } from '../components/EpisodeDetails/EpisodesDetails'
import { NotFound } from '../components/NotFound/NotFound'
import { LandingPage } from "../components/LandingPage/LandingPage"
import { About } from "../components/About/About"


export const RouterWeb = () => {

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path="/about" element={<About />} />
      {/* <Route exact path='/characters' element={} />
      <Route exact path='/episodes' element={Catalogue} /> */}
      <Route exact path='/character/:id' element={<CharacterDetails />} />
      <Route exact path='/episode/:id' element={<EpisodeDetails />} />
      <Route element={<NotFound />} />
    </Routes>
  )
}