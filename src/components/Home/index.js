import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamList()
  }

  getData = () => {
    const {teamList} = this.state
    return (
      <fragment>
        <div className="app-name">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-img"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul className="teamList-container">
          {teamList.map(eachItem => (
            <TeamCard eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </fragment>
    )
  }

  getTeamList = async () => {
    const fetchData = await fetch('https://apis.ccbp.in/ipl')
    const data = await fetchData.json()
    const changedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({
      teamList: changedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getData()
        )}
      </div>
    )
  }
}

export default Home
