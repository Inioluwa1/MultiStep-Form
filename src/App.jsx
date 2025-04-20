import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationPage from './pages/NavigationPage.jsx'
import PersonalInfo from './pages/PersonalInfo.jsx'
import PlanSelection from './pages/PlanSelection.jsx'
import AddonsPage from './pages/AddonsPage.jsx'
import SummaryPage from './pages/SummaryPage.jsx'
import './App.css'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selected, setSelected] = useState('')
  const [Timeperiod, setTimeperiod] = useState(true)

  return (
    <div className="Application">
      <Router>
        <div className="NavigationBar">
          <NavigationPage />
        </div>
        
        <div className="MainPage">
          <Routes>
            <Route path='/' 
                    element={<PersonalInfo
                    name={name} setName={setName}
                    email={email} setEmail={setEmail}
                    phone={phone} setPhone={setPhone} />} />
            <Route path='/plan-selection' 
                    element={<PlanSelection
                    selected={selected} setSelected={setSelected}
                    Timeperiod={Timeperiod} setTimeperiod={setTimeperiod} />} />
            <Route path='/addons' 
                    element={<AddonsPage 
                    Timeperiod={Timeperiod} />} />
            <Route path='/summary' 
                    element={<SummaryPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
