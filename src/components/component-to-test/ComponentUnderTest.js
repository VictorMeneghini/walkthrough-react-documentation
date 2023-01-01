import {useState} from "react"

const ComponentUnderTest = () => {
  const [list , setList] = useState(["Victor", "camila", "raj"])

  const addToList = () => {
    setTimeout(() => {
      setList(state => [...state, "novo item"])
    }, 500)
  }
  
  return (
    <>
      <button onClick={() => addToList()}>Add</button>
      <ul>
        {list.map((item) => <li key={`${Math.floor(Math.random() * 300) + 1}`}>{item}</li>)}
      </ul>
    </>
    
  )
}

export default ComponentUnderTest