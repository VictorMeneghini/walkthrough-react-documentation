import { useParams, Outlet, Link } from "react-router-dom";

const ContactPage = () => {

  const params = useParams()

  return (
    <>
      <div>Hello user: {params.name}</div>
      <Link to={"details"}>Details</Link>
      <Outlet />
    </>
  )
}

export default ContactPage