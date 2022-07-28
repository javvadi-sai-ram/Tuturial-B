import './index.css'

const LatestMatch = props => {
  const {data} = props
  console.log(DataTransfer)
  return (
    <div className="latest-match-container">
      <div className="latest-match-container-1">
        <h1>{data.competingTeam}</h1>
        <p>{data.date}</p>
        <p>{data.venue}</p>
        <p>{data.result}</p>
      </div>
      <div className="latest-match-container-2">
        <img
          src={data.competingTeamLogo}
          alt={data.competingTeam}
          className="competing-team-image"
        />
      </div>
      <div className="latest-match-container-3">
        <p>First Innings</p>
        <p>{data.firstInnings}</p>
        <p>Second Innings</p>
        <p>{data.secondInnings}</p>
        <p>Man Of The MatchS</p>
        <p>{data.manOfTheMatch}</p>
        <p>umpires</p>
        <p>{data.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
