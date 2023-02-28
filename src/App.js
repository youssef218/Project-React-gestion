import './App.css'
import Ajouter from './components/table/Ajouter'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Pagemodif from './components/table/pagemodif'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tableau from './components/table/Tableau'
function App () {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/rel'  element={<Main />} />
          <Route path='/Ajouter'  element={<Ajouter />} />
          <Route path='/tableau'  element={<Tableau />} />
          <Route path='/Pagemodif/:id'  element={<Pagemodif />} />
        </Routes>
        
      </Router>
    </>
  )
}

export default App
