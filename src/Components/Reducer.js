import {v4 as uuidv4} from "uuid"

export const Reducer = (state , action)=>{
    switch(action.type){
        

        case "addTodo":
           
            if(!action.payload){
                return state
            }

            // findIndex 
            if(state.todos.findIndex((t) => t.text === action.payload) > -1){  
                return state      
            }

            // action.payload == text  input
            const newTodo = { id : uuidv4() ,  text : action.payload, complete : false }
            const addedTodo = [...state.todos , newTodo];  
            return {...state , todos : addedTodo}  

            
            // dispatch({type : "editTodo" , payload : todo})
          

        case "toggleTodo" :
        const toggleTodos = state.todos.map((t)=> t.id === action.payload.id ? {...action.payload ,
          
           complete :!action.payload.complete  } : t)

        // action.payload.id    ===> todo.id   == todo : {id : 5 , text : "python , complete : false"}
            return {...state , todos : toggleTodos}


        case "removeTodo" :
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;

           
            const filterTodos = state.todos.filter((t) => t.id !== action.payload.id)
            return {...state , currentTodo : isRemovedTodo ,todos : filterTodos}


            case "deleteAll" :
                return {...state , todos : [] , currentTodo : {}}


        case "setCurrentTodo":
            
            return {  
                ...state , currentTodo : action.payload,
            }    


        case "updateTodo":
       
            if(!action.payload){      // action.payload ===  <input text 
                return state
            }
             
            if(state.todos.findIndex((t) => t.text === action.payload) > -1){
                return state
            }
            
             const updatedTodo = {...state.currentTodo , text : action.payload}  
           
             const updatedTodoIndex = state.todos.findIndex((t)=> t.id === state.currentTodo.id) 
           
             const updatedTodos = [...state.todos.slice(0 , updatedTodoIndex) , updatedTodo , ...state.todos.slice(updatedTodoIndex + 1)] 
             return {
                 ...state, currentTodo : {} , todos : updatedTodos    
             }
        default : 
        return state
    }
}
