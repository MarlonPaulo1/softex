import { useState } from "react"
import { FiSearch } from 'react-icons/fi'
import Card from "../Card"
import './style.css'

function Search() {
    const [data, setData] = useState({})
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const [repositories, setRepositories] = useState([])

    function onChangeHandler(e) {
        setUsername(e.target.value)
    }

    async function submitHandler(e) {
        e.preventDefault()

        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json()

        const repositories = await fetch(profileJson.repos_url)
        const repoJson = await repositories.json()

        if(profileJson) {
            setData(profileJson)
            setRepositories(repoJson)
        }

        setUsername('')
        setLoading(true)
    }

    return (
        <div className="container">
            <form>
                <FiSearch className="icon-search" />
                <input 
                    type="text" 
                    placeholder="Search GitHub username..."
                    value={username}                    
                    onChange={(e) => onChangeHandler(e)} 
                />
                <button type="submit" onClick={(e) => submitHandler(e)}>Search</button>
            </form>

            {loading 
                ? (
                    <Card 
                avatar_url={data.avatar_url}
                name={data.name}     
                login={data.login} 
                bio={data.bio}
                created_at={data.created_at} 
                public_repos={data.public_repos} 
                followers={data.followers} 
                following={data.following} 
                location={data.location} 
                twitter_username={data.twitter_username} 
                blog={data.blog} 
                company={data.company} 
            />
                )
            : (
                ''
            )
            }

            
            
        </div>
    )
}

export default Search