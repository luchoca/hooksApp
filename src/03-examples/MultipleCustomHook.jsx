import { useFetch } from "../hook/useFetch"
import { useCounter } from "../hook/useCounter"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHook = () => {


    const { counter, decrement, increment } = useCounter(1)
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    console.log(data);

    return (
        <>

            <h1>Informacion del Pokemon</h1>
            <hr />
            {isLoading ? <LoadingMessage /> : <PokemonCard id={data.id} name={data.name} sprites={[data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default]} />}

            <button onClick={() => counter > 1 ? decrement() : null} className="btn btn-primary">Anterior</button>
            <button onClick={() => increment()} className="btn btn-primary">Siguiente</button>

        </>

    )
}
// back_default
// back_shiny
// front_default
// front_shiny