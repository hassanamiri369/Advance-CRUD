import React , {useContext , useReducer} from 'react';
import ReactDOM from 'react-dom';
import IndexCheckBox from './CheckBoxComponent/IndexCheckBox';




import TodosContext from './Components/Context';
import { Reducer } from './Components/Reducer';
import TodoList from './Components/TodoList';



const App = ()=>{
  const initState = useContext(TodosContext)

  const [state , dispatch] = useReducer(Reducer ,initState , ()=> {
      
  let todoList = localStorage.getItem("todoList")

  if(todoList){
    return JSON.parse(localStorage.getItem("todoList"))
  }else{
    return []
  }
  } )


  // setData localStorage
  React.useEffect(()=>{
    localStorage.setItem("todoList" , JSON.stringify(state))
  } ,[state])
  


  return(
    <TodosContext.Provider value={{state, dispatch}}>
        <TodoList/>

        {/* <IndexCheckBox/> */}
      </TodosContext.Provider>
  )
}
ReactDOM.render(
  

    <App />

  
  ,
  document.getElementById('root')
);


