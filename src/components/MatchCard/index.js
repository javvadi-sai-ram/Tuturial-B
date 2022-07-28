import './index.css'

const MatchCard = props => {
  const {data} = props
  return (
    <li className="match-card-container">
      <img
        src={data.competingTeamLogo}
        alt={data.competingTeam}
        className="match-card-image"
      />
      <h1>{data.competingTeam}</h1>
      <p>{data.result}</p>
      <p>{data.matchStatus}</p>
    </li>
  )
}

export default MatchCard
