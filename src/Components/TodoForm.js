import React , {useState , useEffect , useContext} from 'react'
import TodosContext from './Context'
import "./TodoList.css"

const TodoForm = () => {

    const [text , setText] = React.useState("")

    const {state : {currentTodo = {}} , dispatch} = useContext(TodosContext)


  // focus input
  const inputRef = React.useRef(null);
  React.useEffect(()=> {
    inputRef.current.focus()
  }, [])


 
  useEffect(()=> {
    if(currentTodo.text){     
      setText(currentTodo.text)  
    }else{
      setText("")
    }
  }, [currentTodo.id])

 
  const handleSubmit = (e)=>{
    e.preventDefault()

    // edit  ====> update    
    if(currentTodo.text){
      dispatch({type : "updateTodo" , payload : text})
    }else{
                             
      dispatch({type : "addTodo" , payload : text})
    }
    setText("")
  }

 
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className='addInput' ref={inputRef}  value={text} onChange={(e)=> setText(e.target.value)}/>
            <button className='addButton'  type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm
