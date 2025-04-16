import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationPage from './pages/NavigationPage.jsx'
import PersonalInfo from './pages/PersonalInfo.jsx'
import PlanSelection from './pages/PlanSelection.jsx'
import AddonsPage from './pages/AddonsPage.jsx'
import SummaryPage from './pages/SummaryPage.jsx'
import './App.css'


function App() {

  return (
    <div className="Application">
      <Router>
        <div className="NavigationBar">
          <NavigationPage />
        </div>
        <div className="MainPage">
          <Routes>
            <Route path='/' element={<PersonalInfo />} />
            <Route path='/plan-selection' element={<PlanSelection />} />
            <Route path='/addons' element={<AddonsPage />} />
            <Route path='/summary' element={<SummaryPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
