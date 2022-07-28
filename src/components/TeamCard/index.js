import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachItem} = props
  const {teamImageUrl, name, id} = eachItem
  return (
    <Link to={`/team-matches/${id}`} className="link-to-each-team">
      <li className="each-teamcard">
        <img src={teamImageUrl} alt={name} className="team-image1" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
