import React , {useReducer}from 'react'

const CounterReducer = () => {

    const reducer = (state , action) =>{
        switch(action.type){
            case "inc":
                return {counter : state.counter + 1}
            case "dec":
                return {counter : state.counter - 1}
            case "reset":
                return {counter : initState.counter}
            default : 
                return state
        }
    }

    const initState = {
        counter : 0
    }

    const [state , dispatch] = useReducer(reducer , initState)
  return (
    <>
        <h3>CounterReducer</h3>
        <button style={{background:"lightGreen" }} onClick={() => {dispatch({type : "inc"})}}>increment</button>
        <button style={{background:"red" }} onClick={() =>{dispatch({type : "dec"})}}>decrement</button>
        <button style={{background:"yellow" }} onClick={() => {dispatch({type : "reset"})}}>reset</button>
        <p>{state.counter}</p>
    </>
  )
}

export default CounterReducer