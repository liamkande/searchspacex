import React, { useState} from 'react'
import Search from "./searchResults"
import './app.css'


export default function App () {
  const [ missionname, setMissionname] = useState('')
  const [ rocketname, setRocketname] = useState('')
  const [ launchyear, setLaunchyear] = useState('')
 
  return (
    <div className="container">
      <h1>Search SpaceX Launches</h1>
      <form className="form">
          <label className="label">
            Mission Name:
          </label>
          <input
            className="field"
            type='text'
            name={missionname}
            onChange={(e) => setMissionname(e.target.value) }
            placeholder='Thaicom'
           
          />
          <label className="label">
            Rocket Name:
          </label>
          <input
            className="field"
            type='text'
            name={rocketname}
            onChange={(e) => setRocketname(e.target.value) }
            placeholder="Falcon 9"
           
          
          />
          <label className="label" >
            Launch Year:
          </label>
          <input
            className="field"
            type='text'
            name={launchyear}
            onChange={(e) => setLaunchyear(e.target.value) }
            placeholder="2020"     
          />
          <Search missionname={missionname}
                  rocketname={rocketname}
                  launchyear={launchyear} 
          />
      </form>
    </div>
  )
}


