import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import './SummaryPage.css'

export default function SummaryPage({selectedName, selectedPrice, isMonth}) {
  const locate = useLocation()
  const navigate = useNavigate()
  const {selectedAddons} = locate.state || {selectedAddons: []}
  useEffect(() =>  {
    console.log(selectedAddons)
  }, [])

  
  const price = selectedAddons.reduce((sum, addon) => {
    const Monthprice = addon.monthlyPrice
    const Yearprice = addon.yearlyPrice
    
    const number = isMonth? parseInt(Monthprice) : parseInt(Yearprice)
    return sum + number;
  }, 0)

  const total = parseInt(selectedPrice) + price;

  const gobacktoAddon = () => {
    navigate("/addons")
  } 

  const movetothankyoupage = () => {  
    navigate("/thankyou")
  }
  
  return (
    <div className='SummaryPage'>
      <h1 className="AddsonPageTitle"> Finishing up </h1>
      <p className='AddsonPageDeatils'> Double-check everything looks OK before confirming </p>

      <div className='Summary'>
        <div className='PlanSummary'>
          <div className="IndPlanSummary">
            <p> {selectedName} {isMonth? "(Monthly)" : "(Yearly)"} </p>
            <Link to= '/plan-selection' className='Link' > Change </Link>
          </div>
          <p> ${selectedPrice} </p>
        </div>
        <div>
          {selectedAddons.map((addon, index) => (
            <div key={index} className='ServiceSummary'> 
              <p> {addon.service}</p>
              <p className='SummaryPrice'> +${isMonth? `${addon.monthlyPrice}` : `${addon.yearlyPrice}`} </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='SummaryTotal'> 
        <p> Total {isMonth? "(per month)" : "(per year)"} </p>
        <p className='SummaryTotalPrice'> {total}{isMonth? "/mo" : "/yr"} </p>
      </div>

      <div className='SummaryPageButton'>
        <p onClick={gobacktoAddon}>Go Back </p>
        <button onClick={movetothankyoupage}> Confirm </button>
      </div>
    </div>
  )
} 