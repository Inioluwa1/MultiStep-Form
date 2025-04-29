import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationPage from './pages/NavigationPage.jsx'
import PersonalInfo from './pages/PersonalInfo.jsx'
import PlanSelection from './pages/PlanSelection.jsx'
import AddonsPage from './pages/AddonsPage.jsx'
import SummaryPage from './pages/SummaryPage.jsx'
import Thankyou from './pages/Thankyou.jsx'
import './App.css'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedName, setSelectedName] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')  
  const [isMonth, setisMonth] = useState(true)


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
                    setSelectedPrice={setSelectedPrice}
                    selectedName={selectedName} setSelectedName={setSelectedName}
                    isMonth={isMonth} setisMonth={setisMonth} />} />
            <Route path='/addons' 
                    element={<AddonsPage 
                    isMonth={isMonth}
                    />} />
            {selectedPrice &&
            <Route path='/summary' 
                    element={<SummaryPage
                    isMonth={isMonth}
                    selectedName={selectedName} 
                    selectedPrice={selectedPrice}
                    />} /> }       
            <Route path='/thankyou' 
                    element={<Thankyou />} />        
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
