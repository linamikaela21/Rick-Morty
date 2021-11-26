import { Route, Routes } from "react-router-dom"
import { Home } from '../components/Home/Home'
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails'
import { NotFound } from '../components/NotFound/NotFound'
import { LandingPage } from "../components/LandingPage/LandingPage"
import { About } from "../components/About/About"
import { Characters } from "../components/Characters/Characters"
import { Episodes } from "../components/Episodes/Episodes"


export const RouterWeb = () => {

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path='/characters' element={<Characters/>} />
      <Route exact path='/characters/:id' element={<CharacterDetails />} />
      <Route exact path='/episodes' element={<Episodes/>} />
      <Route element={<NotFound />} />
    </Routes>
  )
}