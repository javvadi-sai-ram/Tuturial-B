import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTotalTeamDetails = () => {
    const {teamDetails} = this.state
    const {changedDataArray, changedDataObject} = teamDetails

    return (
      <div className="teamMatches-sub-container">
        <img
          src={changedDataObject.teamBannerUrl}
          className="team-image"
          alt="team banner"
        />
        <div className="latest-matches-content-container">
          <h1 className="latest-matches-content">Latest Matches</h1>
        </div>
        <LatestMatch data={changedDataObject.latestMatchDetails} />
        <ul className="match-card-component">
          {changedDataArray.map(item => (
            <MatchCard data={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const fetchedData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await fetchedData.json()
    const changedDataObject = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
    }

    const changedDataArray = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      teamDetails: {changedDataObject, changedDataArray},
      isLoading: false,
    })
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTotalTeamDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
