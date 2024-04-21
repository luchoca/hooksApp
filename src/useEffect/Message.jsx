import { useEffect } from "react";

export const Message = () => {
useEffect(() => {
  console.log("Mensaje Montado");

  return () => {
    console.log("Se Desmonto Mensaje"); 
  }
}, [])

  return (
   <>
   <h3>Usuario Ya existe</h3>
   </>
  )
}
