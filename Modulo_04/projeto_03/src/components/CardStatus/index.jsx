import './style.css'

function CardStatus(props) {
  return (
    <div className='card-status'>
        <div className='repos-github'>
            <p>Repos</p>
            {props.public_repos}
        </div>
        <div className='followers-github'>
            <p>Followers</p>
            {props.followers}
        </div>
        <div className='following-github'>
            <p>Following</p>
            {props.following}
        </div>
    </div>
  )
}

export default CardStatus