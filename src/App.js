import {useState} from 'react'
import "./App.css"
function App(){
  let[counter,setCounter]=useState(0)
  let stock=10
  return(
    <>
      <h1>Counter App in React</h1>
      <div className="style">
        <button className="minus"
                      onClick={()=>{
                            if(counter>0){
                              setCounter(counter-1)
                            }
                      }}
        >-</button>
        <p>{counter}</p>
        <button className="plus"
                            onClick={()=>{
                              if(counter<stock){
                                setCounter(counter+1)
                              }
                            }}
        >+</button>
      </div>
    </>
  )
}
export default App