import './style.css'

function Card(props) {
  return (
    <div className="card-container" onClick={() => props.infoPokemon(props)}>
      <div className='images'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="bio-pokemon">
        <p className='id'>#{props.id}</p>
        <div className="type">
          {
            props.types.map((poke, key) => {
              return (
                <div className="group-type" key={key}>
                  <p>{poke.type.name}</p>
                </div>
              )
            })
          }
          
          
        </div>
        <h3 className='name'>{props.name}</h3>
      </div>  
    </div>
    
  )
}

export default Card