import './style.css'

function CardHeader(props) {
  return (
    <div className='card-header'>
        <div className='card-header-top'>
            <div className="container-user">
                <div className='image'>
                    <img src={props.avatar_url} alt={props.name} />
                </div>
                <div className='user'>
                    <h2 className='name-github'>{props.name}</h2>
                    <p className='login-github'>@{props.login}</p>     
                </div>  
            </div>

            <div className='created-at'>
                <p>Joined {new Date(props.created_at).toLocaleDateString()}</p>
            </div> 
        </div>

        <div>
            <p className='bio-github'>
                {props.bio ?? 'This profile has no bio'}
            </p>    
        </div>       
    </div>
  )
}

export default CardHeader
