import { useState } from "react"
import { useCounter } from "../hook/useCounter"

export const MemoHook = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (

        <>
            <h1>Counter :  <small>{value}</small></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment()} 
            >
                +1
            </button>


        </>
    )
}
