import React , {createContext , useEffect} from "react"





const initState = {
    todos :[
        {id : 1 , text : "python is a backend language" , complete : false},
        {id : 2 , text : "javascript is a frontEnd language" , complete : false},
        {id : 3 , text : "React is a frontend library" , complete : false}, 
        {id : 4 , text : "nodejs is a backend language" , complete : false},
        
    ] , 
    
    currentTodo : {}
}


const TodosContext = createContext(initState)



export default TodosContext;