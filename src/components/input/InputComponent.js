import {useState, useImperativeHandle, forwardRef} from "react"



const InputComponent = (props, ref) => {
  const [isVisible, setIsVisible ] = useState(false)

 
  useImperativeHandle(ref, () => ({
    turnVisible: setIsVisible
  }))

  return <>
    {isVisible && <h1>Hello world</h1>}
    <input />
  </>
}

export default forwardRef(InputComponent)