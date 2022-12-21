import { useState } from "react";

const ControlledComponentForm = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    animal: "turtle"
  });


  const onHandleChange = (e) => {
   console.log(e.target.name)
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onHandleSubmitForm = (e) => {
    e.preventDefault();
    alert("Form submited")
   }


  return (
    <>
      <pre>
        name: {form.name}
        description: {form.description}
        animal: {form.animal}
      </pre>
      <form onSubmit={onHandleSubmitForm}>
        <label htmlFor="name" >Name: </label>
        <input id="name" name="name" type="text" value={form.name} onChange={onHandleChange}></input>

        <label htmlFor="description" >Description: </label>
        <textarea id="description" name="description" type="text" value={form.description} onChange={onHandleChange}></textarea>

        <label htmlFor="animals">Choose favorite: </label>
        <select id="animals" value={form.animal} name="animal" onChange={onHandleChange}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="turtle">Turtle</option>
          <option value="sneak">Sneak</option>
        </select>

        <button>Submit</button>
      </form>
    </>
    
  )
}


export default ControlledComponentForm