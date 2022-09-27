import './style.css'
import CardHeader from '../CardHeader'
import CardStatus from '../CardStatus'
import CardFooter from '../CardFooter'

function Card(props) {
    return(
        <div className="card-container">
            <CardHeader
                avatar_url={props.avatar_url} 
                name={props.name}
                login={props.login}
                created_at={props.created_at}
                bio={props.bio}
            />
            <CardStatus 
                public_repos={props.public_repos}
                followers={props.followers}
                following={props.following}
            />
            <CardFooter 
                location={props.location}
                twitter_username={props.twitter_username}
                blog={props.blog}
                company={props.company}
            />    
        </div>
    )
}

export default Card