import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <h2 className='title'>Register</h2>
            <h3 className='subtitle'>Receive exclusive promotions</h3>    
        </div>
        <div>
            <div>
                <label htmlFor="name">Name :</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />    
            </div>
            <div>
                <label htmlFor="email">E-mail :</label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />    
            </div>
            {!name || !email ? 
            (<button type="submit">
                <Link to="/" className='link'>Register</Link>
            </button>) : 
            (<button type="submit">
            <Link to="/black_friday" className='link'>Register</Link>
        </button>)
        }
            
        </div>
    </form>
  )
}

export default Form