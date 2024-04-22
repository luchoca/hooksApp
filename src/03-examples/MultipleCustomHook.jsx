import { useFetch } from "../hook/useFetch"
import { useCounter } from "../hook/useCounter"

export const MultipleCustomHook = () => {


    const { counter, decrement, increment } = useCounter(1)
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)


    return (
        <>
            <h1>Informacion del Pokemon</h1>
            <hr />
            {isLoading ? (
                <p>cargando...</p>
            ) : (

                <h2>{data?.name}</h2>

            )}

            <button onClick={() => counter > 1 ? decrement() : null} className="btn btn-primary">Anterior</button>
            <button onClick={() => increment()} className="btn btn-primary">Siguiente</button>

        </>

    )
}
