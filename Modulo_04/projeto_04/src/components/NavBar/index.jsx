import logo from '../../assets/logo.svg'
import './style.css'

function NavBar({ filterPokemon }) {
  return (
    <header>
        <nav>
            <img src={logo} alt="Pokemon" />
            <h2>Pokédex</h2>
            <input 
              type="search" 
              placeholder='Pesquisar...'
              onChange={(e) => filterPokemon(e.target.value)}
            />
        </nav>    
    </header>  
  )
}

export default NavBar