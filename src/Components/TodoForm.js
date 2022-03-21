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


  // الان اگر رو دکمه ی ادیت بزنیم اطلعات میره توی سرچ بار اینپوتمون 
  useEffect(()=> {
    if(currentTodo.text){     // یعنی اگر داخل اون کارنت تودو ابجکتی بود بیا تکستش رو وارد اینپوت کن  
      setText(currentTodo.text)  // با اپدیت شدن استیت صفحه ام ری لود میشه و هر دفعه میاد داخل این ابجکت رو برسی میکنه 
    }else{
      setText("")
    }
  }, [currentTodo.id])

 
  const handleSubmit = (e)=>{
    e.preventDefault()

    // edit  ====> update     یعنی اگر تیو کارنت تکستی وجود داشت ما در حال اپدبت کردن هستیم 
    if(currentTodo.text){
      dispatch({type : "updateTodo" , payload : text})
    }else{
                                  // در غیر این صورت در حال اد کردن هستیم 
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