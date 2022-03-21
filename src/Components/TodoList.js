import React, { useContext } from 'react'
import TodosContext from './Context'

import TodoForm from './TodoForm';
import "./TodoList.css";

// checkbox ==> text-decoration / checkbox button
// design
// search bar 
// localStorage
// delete all todo button
//  نشون دادن لست اون هایی که تودو شون انجام شده و در کل جند تا تو دو داریم 
// ادیت کردن چند تا اینپوت 

const TodoList = () => {


  const { state, dispatch } = useContext(TodosContext)
  const title = state.todos.length > 0 ? `${state.todos.length}  All Todo` : "Nothing to do !"
  
  



  
  // search todos 
  const [word , setWord] = React.useState("")
 


  // todo is done
  const done =[];
  const undone = []
  const completeTodo = state.todos.map(item => item.complete ? done.push(item.complete) : undone.push(item.complete) )
  
  
  



  return (
    <div className='parent'>
            <h1 >{title}</h1>
            <div className='doneTodo'>
              <h2 style={{color : "lime"}}>Done  : {done.length}</h2>
              <h2 style={{color : "red"}}>Undone : {undone.length}</h2>
            </div>
      
      
      {/* add */}
      <TodoForm />

      <div className='searchTodo-deleteAllTodo'>
         <div>
         <input placeholder='search todo' value={word} onChange={(e) => setWord(e.target.value)}/>
         </div>

          <button className='deleteAll' onClick={() => dispatch({type : "deleteAll"})}>Delete All todo </button>
      </div>


      <ul className='container' >
        
          {state.todos.filter((item) => item.text.toLowerCase().includes(word.toLowerCase())).map((todo, index) =>
          <li key={todo.id}>

            {/* toggle */}
            <div className='divToggle'>
            
           
              <span  className={`${todo.complete ? "unactive" : "active"}`}>{index + 1} : {todo.text}</span>
              <input type="checkbox" value={todo.complete}  onChange={() => dispatch({ type: "toggleTodo", payload: todo })}  />
            </div>


            <div className='editDelete'>

              {/* edit */}
              <button onClick={() => dispatch({ type: "setCurrentTodo", payload: todo })} > edit</button>

              {/* remove */}
              <button onClick={() => dispatch({ type: "removeTodo", payload: todo })}>  delete</button>


            </div>


          </li>)}
        
        
      </ul>
    </div>
  )
}

export default TodoList