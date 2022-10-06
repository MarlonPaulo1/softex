import close from '../../assets/close.svg'
import './style.css'

function Pokemoninfo({ data }) {

    function closeBtn() {
        return data
    }

    console.log(`dados ${closeBtn()}`)

    return (
        <>
            {(!data) ? "" : (
                <div className="pokeinfo"> 
                    <div className="pokeinfo-container">
                        <div className='pokeinfo-image'>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt={data.name} />
                        </div>
                        <div>
                            <div className='pokeinfo-name'>
                                <p>#{data.id}</p>
                                <h1>{data.name}</h1>                                     
                            </div>
                            <div className="abilities">
                                {
                                    data.abilities.map((poke, key) => {
                                        return (
                                            <div className="abilities-group" key={key}>
                                                <p>{poke.ability.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="base-stat">
                                {
                                    data.stats.map((poke, key) => {
                                        return (
                                            <h3 className='stat' key={key}>
                                                {poke.stat.name} : {poke.base_stat}
                                            </h3>
                                        )
                                    }) 
                                }
                            </div>
                        </div>      
                    </div> 
                    <img src={close} alt="" className='close-btn' onClick={() => ''}/>
                </div> 
            )}
        </>      
    )
}

export default Pokemoninfo