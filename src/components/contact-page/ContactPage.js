import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";

const ContactPage = () => {
  const params = useParams()
  const [user, setUser] = useState({
    name: params.name,
    nickname: "Meneghini"
  })
  
  const fetchPokemon = () => {
    console.log("enter here")
    return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
  }

  const onButtonClick = () => {
    setUser(()=> {
      return {...user, nickname: "changed"}
    })
  }

  useEffect(() => {
    fetchPokemon()
  }, [user])

  return (
    <>
      <div>Hello user: { user.name}</div>
      <button onClick={() => onButtonClick()}>Change</button>
      <Link to={"details"}>Details</Link>
      <Outlet />
    </>
  )
}

export default ContactPage